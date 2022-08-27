import { NotaDto } from "../domain/dto/notaDto";
import { NotaModel } from "../domain/model/notaModel";

export interface NotaRepository {
  findAll(): Promise<NotaDto[]>;
  findById(id: string): Promise<NotaDto>;
  save(notaModel: NotaModel): Promise<NotaDto>;
  delete(): void;
}
