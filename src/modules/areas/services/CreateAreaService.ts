import { Inject, Injectable } from "@nestjs/common";
import Area from "../infra/typeorm/entities/Area";
import AreasRepository from "../infra/typeorm/repositories/AreasRepository";
import IAreasRepository from "../repositories/IAreasRepository";

interface IRequest {
  nome: string;
}

@Injectable()
export default class AreaService {
  constructor(
    @Inject(AreasRepository)
    private areasRepository: IAreasRepository,
  ) {}
  public async execute({ nome }: IRequest): Promise<Area> {
    const area = await this.areasRepository.create({
      nome
    });

    return area;
  }
}