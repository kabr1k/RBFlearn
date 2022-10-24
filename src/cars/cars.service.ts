import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}

  async create(createCarDto: CreateCarDto): Promise<Car> {
    return await this.carRepository.save(createCarDto);
    // return 'This action adds a new car';
  }

  async findAll(): Promise<Car[]> {
    return await this.carRepository.find({
      relations: ['category', 'tags', 'transmission'],
    });
  }

  findOne(id: number): Promise<Car> {
    return this.carRepository.findOne({
      where: { id },
      relations: ['category', 'tags', 'transmission'],
    });
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    return await this.carRepository.update(id, updateCarDto);
    // return `This action updates a #${id} car`;
  }

  async remove(id: number): Promise<void> {
    await this.carRepository.delete(id);
    // return `This action removes a #${id} car`;
  }
}
