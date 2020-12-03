import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, ID, Field } from 'type-graphql';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

@ObjectType()
@Entity('area')
export default class Area {
  @Field(type => ID)
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column()
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  nome: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}