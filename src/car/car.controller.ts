import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CarService } from './car.service';
import { Prisma } from '@prisma/client';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  create(@Body() data: Prisma.CarCreateInput) {
    return this.carService.createCar(data);
  }

  @Get()
  findAll() {
    return this.carService.getAllCars();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carService.getCarById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.CarUpdateInput) {
    return this.carService.updateCar(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carService.deleteCar(id);
  }
}
