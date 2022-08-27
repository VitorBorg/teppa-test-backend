import { NotaDto } from "../../domain/dto/notaDto";
import { NotaModel } from "../../domain/model/notaModel";
import { NotaRepository } from "../../repository/notaRepository";

export class FireStoreNotaRepository implements NotaRepository {
  findById(id: string): Promise<NotaDto> {
    throw new Error("Method not implemented.");
  }
  save(notaModel: NotaModel): Promise<NotaDto> {
    throw new Error("Method not implemented.");
  }
  delete(): void {
    throw new Error("Method not implemented.");
  }
  public async findAll(): Promise<NotaDto[]> {
    throw new Error("Method not implemented.");
  }
}
