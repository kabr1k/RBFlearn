import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render, NotFoundException,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
    // return 'This action adds a new car';
  }

  @Get()
  @Render('list')
  async findAll() {
    const result = await this.carsService.findAll();
    if (result) {
      return { result };
    } else {
      throw new NotFoundException();
    }
  }

  @Get(':id')
  @Render('card')
  async findOne(@Param('id') id: string) {
    const result = await this.carsService.findOne(+id);
    if (result) {
      return { result };
    } else {
      throw new NotFoundException();
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(+id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
