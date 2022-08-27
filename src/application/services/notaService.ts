import { NotaModel } from "../../domain/model/notaModel";
import { NotaDto } from "../../domain/dto/notaDto";
import { NotaRepository } from "../../repository/notaRepository";

export class findAll {
  private notaRepository: NotaRepository;

  constructor(nR: NotaRepository) {
    this.notaRepository = nR;
  }

  public async execute(): Promise<NotaDto[]> {
    return this.notaRepository.findAll();
  }
}
