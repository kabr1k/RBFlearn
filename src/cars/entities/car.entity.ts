import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { Transmission } from '../../transmission/entities/transmission.entity';
import { Tag } from '../../tag/entities/tag.entity';
import {JoinColumn} from "typeorm";
import {JoinTable} from "typeorm";

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  gasToKm: number;
  @Column()
  horsePower: number;

  @ManyToOne(() => Category, (category) => category.cars)
  category: Category;

  @ManyToOne(() => Transmission, (transmission) => transmission.cars)
  transmission: Transmission;

  @ManyToMany(() => Tag, (tag) => tag.cars)
  @JoinTable()
  tags: Tag[];
}
