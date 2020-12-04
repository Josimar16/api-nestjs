import ICreateAreaDTO from '@modules/areas/dtos/ICreateAreaDTO';
import Area from '@modules/areas/infra/typeorm/entities/Area';
import IAreaRepository from '@modules/areas/repositories/IAreasRepository';
export default class FakeAreasRepository implements IAreaRepository {
    private areas;
    create(areaData: ICreateAreaDTO): Promise<Area>;
}
