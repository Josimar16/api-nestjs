import ICreateAreaDTO from '@modules/areas/dtos/ICreateAreaDTO';
import IAreasRepository from '@modules/areas/repositories/IAreasRepository';
import Area from '../entities/Area';
export default class AreasRepository implements IAreasRepository {
    private ormRepository;
    constructor();
    create({ nome, }: ICreateAreaDTO): Promise<Area>;
}
