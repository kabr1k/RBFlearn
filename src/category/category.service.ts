import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryRepository.save(createCategoryDto);
    // 'This action adds a new category';
  }

  async findAll() {
    return await this.categoryRepository.find();
    // `This action returns all category`;
  }

  async findOne(id: number) {
    return await this.categoryRepository.findOne({
      where: { id },
    });
    // `This action returns a #${id} category`;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryRepository.update(id, updateCategoryDto);
    // `This action updates a #${id} category`;
  }

  async remove(id: number) {
    return await this.categoryRepository.delete(id);
    // `This action removes a #${id} category`;
  }
}
