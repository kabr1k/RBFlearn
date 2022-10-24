import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  async create(createTagDto: CreateTagDto) {
    return await this.tagRepository.save(createTagDto);
    // return 'This action adds a new tag';
  }

  async findAll() {
    return await this.tagRepository.find();
    // return `This action returns all tag`;
  }

  async findOne(id: number) {
    return await this.tagRepository.findOne({ where: { id } });
    // return `This action returns a #${id} tag`;
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    await this.tagRepository.update(id, updateTagDto);
    // return `This action updates a #${id} tag`;
  }

  async remove(id: number) {
    await this.tagRepository.delete(id);
    // return `This action removes a #${id} tag`;
  }
}
