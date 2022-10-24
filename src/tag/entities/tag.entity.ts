import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from '../../cars/entities/car.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Car, (car) => car.tags)
  cars: Car[];
}
