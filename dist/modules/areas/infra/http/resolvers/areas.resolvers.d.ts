import ICreateAreaDTO from '@modules/areas/dtos/ICreateAreaDTO';
import Area from '@modules/areas/infra/typeorm/entities/Area';
import AreasController from '../controllers/AreasController';
export default class AreaResolver {
    private areasController;
    constructor(areasController: AreasController);
    create(data: ICreateAreaDTO): Promise<Area>;
}
