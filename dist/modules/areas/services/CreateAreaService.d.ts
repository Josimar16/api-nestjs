import Area from "../infra/typeorm/entities/Area";
import IAreasRepository from "../repositories/IAreasRepository";
interface IRequest {
    nome: string;
}
export default class CreateAreaService {
    private areasRepository;
    constructor(areasRepository: IAreasRepository);
    execute({ nome }: IRequest): Promise<Area>;
}
export {};
