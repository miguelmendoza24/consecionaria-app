import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Administrator } from '@prisma/client';

@Injectable()
export class AdministratorService {
  constructor(private prisma: PrismaService) {}

  create(data: Omit<Administrator, 'id'>) {
    return this.prisma.administrator.create({ data });
  }

  findAll() {
    return this.prisma.administrator.findMany();
  }

  findOne(id: string) {
    return this.prisma.administrator.findUnique({ where: { id } });
  }

  update(id: string, data: Partial<Administrator>) {
    return this.prisma.administrator.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.administrator.delete({ where: { id } });
  }
}
