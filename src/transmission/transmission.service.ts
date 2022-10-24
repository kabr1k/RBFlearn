import { Injectable } from '@nestjs/common';
import { CreateTransmissionDto } from './dto/create-transmission.dto';
import { UpdateTransmissionDto } from './dto/update-transmission.dto';
import { Transmission } from './entities/transmission.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TransmissionService {
  constructor(
    @InjectRepository(Transmission)
    private transmissionRepository: Repository<Transmission>,
  ) {}
  async create(createTransmissionDto: CreateTransmissionDto) {
    return await this.transmissionRepository.save(createTransmissionDto);
    // return 'This action adds a new transmission';
  }

  async findAll() {
    return await this.transmissionRepository.find();
    // return `This action returns all transmission`;
  }

  async findOne(id: number) {
    return await this.transmissionRepository.findOne({ where: { id } });
    // return `This action returns a #${id} transmission`;
  }

  async update(id: number, updateTransmissionDto: UpdateTransmissionDto) {
    await this.transmissionRepository.update(id, updateTransmissionDto);
    // return `This action updates a #${id} transmission`;
  }

  async remove(id: number) {
    await this.transmissionRepository.delete(id);

    // return `This action removes a #${id} transmission`;
  }
}
