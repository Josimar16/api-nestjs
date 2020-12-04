import Area from '@modules/areas/infra/typeorm/entities/Area';
import ICreateAreaDTO from '@modules/areas/dtos/ICreateAreaDTO';
export default interface IAreasRepository {
    create(data: ICreateAreaDTO): Promise<Area>;
}
