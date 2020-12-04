import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import AreaModule from '@modules/areas/providers/ModuleProvider/area.module';
import * as Options from '@shared/infra/typeorm'
@Module({
  imports: [
    TypeOrmModule.forRoot(Options),
    // GraphQLModule.forRoot({
    //   autoSchemaFile: '@shared/providers/SchemaProvider/schema.gql',
    // }),
    AreaModule,
  ],
})
export class AppModule { }
