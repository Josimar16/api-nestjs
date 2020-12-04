import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Areas from '@modules/areas/infra/typeorm/entities/Area';
import AreaResolver from '@modules/areas/infra/http/resolvers/area.resolver';
import CreateAreaService from '@modules/areas/services/CreateAreaService';
import AreasController from '@modules/areas/infra/http/controllers/AreasController';

@Module({
  imports: [TypeOrmModule.forFeature([Areas])],
  providers: [CreateAreaService, AreaResolver],
})
export class AreaModule { }