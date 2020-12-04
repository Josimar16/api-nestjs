import { Resolver, Mutation, Args } from '@nestjs/graphql';
import ICreateAreaDTO from '@modules/areas/dtos/ICreateAreaDTO';
import Area from '@modules/areas/infra/typeorm/entities/Area';
import AreasController from '../controllers/AreasController';

@Resolver('Area')
export default class AreasResolver {
  constructor(
    private areasController: AreasController,
  ) {}
  @Mutation(returns => Area)
  public async create(@Args('data') data: ICreateAreaDTO): Promise<Area> {
    const area = await this.areasController.create(data);
    return area;
  }
}