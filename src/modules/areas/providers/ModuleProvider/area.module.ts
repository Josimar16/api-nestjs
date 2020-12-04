import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Area from '@modules/areas/infra/typeorm/entities/Area';
import AreaController from '@modules/areas/infra/http/controllers/AreasController';
import CreateAreaService from '@modules/areas/services/CreateAreaService';

@Module({
  imports: [TypeOrmModule.forFeature([Area])],
  controllers: [AreaController],
  providers: [CreateAreaService]
})
export default class AreaModule { }