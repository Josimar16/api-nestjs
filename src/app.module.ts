import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: '@shared/providers/SchemaProvider/schema.gql',
    }),
  ],
})
export class AppModule { }
