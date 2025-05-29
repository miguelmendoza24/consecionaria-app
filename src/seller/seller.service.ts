import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SellerService {
  constructor(private prisma: PrismaService) {}

  createSeller(data: Prisma.SellerCreateInput) {
    return this.prisma.seller.create({ data });
  }

  getAllSeller() {
    return this.prisma.seller.findMany();
  }

  getSellerById(id: string) {
    return this.prisma.seller.findUnique({ where: { id } });
  }

  updateSeller(id: string, data: Prisma.SellerUpdateInput) {
    return this.prisma.seller.update({ where: { id }, data });
  }

  deleteSeller(id: string) {
    return this.prisma.seller.delete({ where: { id } });
  }
}
