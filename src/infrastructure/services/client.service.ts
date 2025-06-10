import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  createClient(data: Prisma.ClientCreateInput) {
    return this.prisma.client.create({ data });
  }

  getAllClients() {
    return this.prisma.client.findMany();
  }

  getClientById(id: string) {
    return this.prisma.client.findUnique({ where: { id } });
  }

  updateClient(id: string, data: Prisma.ClientUpdateInput) {
    return this.prisma.client.update({ where: { id }, data });
  }

  deleteClient(id: string) {
    return this.prisma.client.delete({ where: { id } });
  }
}
