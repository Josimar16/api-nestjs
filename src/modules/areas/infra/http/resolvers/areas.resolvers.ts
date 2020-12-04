import { Resolver, Mutation, Args } from '@nestjs/graphql';
import ICreateAreaDTO from '@modules/areas/dtos/ICreateAreaDTO';
import Area from '@modules/areas/infra/typeorm/entities/Area';

@Resolver('Area')
export default class AreaResolver {
  @Mutation(returns => Area)
  public async create(@Args('data') data: ICreateAreaDTO): Promise<Area> {
    const area = await AreaController.create(data);
  }
}