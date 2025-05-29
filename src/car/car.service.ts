import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  createCar(data: Prisma.CarCreateInput) {
    return this.prisma.car.create({ data });
  }

  getAllCars() {
    return this.prisma.car.findMany();
  }

  getCarById(id: string) {
    return this.prisma.car.findUnique({ where: { id } });
  }

  updateCar(id: string, data: Prisma.CarUpdateInput) {
    return this.prisma.car.update({ where: { id }, data });
  }

  deleteCar(id: string) {
    return this.prisma.car.delete({ where: { id } });
  }
}
