import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class ReturnService {
  constructor(private prisma: PrismaService) {}

  createReturn(data: Prisma.ReturnCreateInput) {
    return this.prisma.return.create({ data });
  }

  getAllReturn() {
    return this.prisma.return.findMany();
  }

  getReturnById(id: string) {
    return this.prisma.return.findUnique({ where: { id } });
  }

  updateReturn(id: string, data: Prisma.ReturnUpdateInput) {
    return this.prisma.return.update({ where: { id }, data });
  }

  deleteReturn(id: string) {
    return this.prisma.return.delete({ where: { id } });
  }
}
