import ICreateAreaDTO from '@modules/areas/dtos/ICreateAreaDTO';
import Area from '@modules/areas/infra/typeorm/entities/Area';
import IAreaRepository from '@modules/areas/repositories/IAreasRepository';

export default class FakeAreasRepository implements IAreaRepository {
  private areas: Area[] = [];
  public async create(areaData: ICreateAreaDTO): Promise<Area> {
    let id: number = 0;
    const area = new Area();
    Object.assign(area, { id: id + 1 }, areaData);
    this.areas.push(area);
    return area;
  }
}