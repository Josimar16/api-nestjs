import ICreateAreaDTO from '@modules/areas/dtos/ICreateAreaDTO';
import IAreasRepository from '@modules/areas/repositories/IAreasRepository';
import { getRepository, Repository } from 'typeorm';
import Area from '../entities/Area';

export default class AreasRepository implements IAreasRepository {
  private ormRepository: Repository<Area>;

  constructor() {
    this.ormRepository = getRepository(Area);
  }

  public async create({
    nome,
  }: ICreateAreaDTO): Promise<Area> {
    const area = this.ormRepository.create({ nome });
    await this.ormRepository.save(area);
    return area;
  }
}
