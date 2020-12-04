import ICreateAreaDTO from "@modules/areas/dtos/ICreateAreaDTO";
import CreateAreaService from '@modules/areas/services/CreateAreaService';
import Area from "../../typeorm/entities/Area";
export default class AreasController {
    private createAreaService;
    constructor(createAreaService: CreateAreaService);
    create({ nome }: ICreateAreaDTO): Promise<Area>;
}
