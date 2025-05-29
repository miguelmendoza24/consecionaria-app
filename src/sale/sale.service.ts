import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class SaleService {
  constructor(private prisma: PrismaService) {}

  createSale(data: Prisma.SaleCreateInput) {
    return this.prisma.sale.create({ data });
  }

  getAllSale() {
    return this.prisma.sale.findMany();
  }

  getSaleById(id: string) {
    return this.prisma.sale.findUnique({ where: { id } });
  }

  updateSale(id: string, data: Prisma.SaleUpdateInput) {
    return this.prisma.sale.update({ where: { id }, data });
  }

  deleteSale(id: string) {
    return this.prisma.sale.delete({ where: { id } });
  }
}
