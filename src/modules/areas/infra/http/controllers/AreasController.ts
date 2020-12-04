import ICreateAreaDTO from "@modules/areas/dtos/ICreateAreaDTO";
import CreateAreaService from '@modules/areas/services/CreateAreaService';
import Area from "../../typeorm/entities/Area";

export default class AreasController {
  constructor(
    private createAreaService: CreateAreaService,
  ) {
  }
  public async create({ nome }: ICreateAreaDTO): Promise<Area> {
    const area = await this.createAreaService.execute({ nome });
    return area
  }
}