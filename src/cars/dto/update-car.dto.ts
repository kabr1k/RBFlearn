import { PartialType } from '@nestjs/swagger';
import { CreateCarDto } from './create-car.dto';
import {
  Column,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { Transmission } from '../../transmission/entities/transmission.entity';
import { Tag } from '../../tag/entities/tag.entity';

export class UpdateCarDto extends PartialType(CreateCarDto) {
  id: number;

  name: string;
  description: string;
  gasToKm: number;
  horsePower: number;

  category: Category;

  transmission: Transmission;

  tags: Tag[];
}
