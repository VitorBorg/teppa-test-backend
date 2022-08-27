import { Request, Response } from "express";
import { FireStoreNotaRepository } from "../../infra/firebase/FireStoreNotaRepository";
import { findAll } from "../../application/services/notaService";

export class NotaController {


  public async getAll(req: Request, res: Response): Promise<Response> {
    const repositoryNota = new FireStoreNotaRepository();
    const query = new findAll(repositoryNota);

    const notas = await query.execute();

    return res.json(notas);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    const posts = await service.save(data);
    return res.status(200).json(posts);
  }
}
