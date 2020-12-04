import ICreateAreaDTO from "@modules/areas/dtos/ICreateAreaDTO";

export default class AreasController {
  public async create({nome}: ICreateAreaDTO): Promise<Area> {
    const area = await CreateAreaService.execute({nome});
    return area
  }
}