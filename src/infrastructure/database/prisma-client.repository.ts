import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
import { ClientRepository } from 'src/domain/repositories/client.repository';
import { Client } from 'src/domain/entities/client.entity';

@Injectable()
export class PrismaClientRepository implements ClientRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(client: Client): Promise<Client> {
    const created = await this.prisma.client.create({
      data: {
        id: client.id,
        name: client.name,
        age: client.age,
        phone: client.phone,
        email: client.email,
      },
    });
    return new Client(
      created.id,
      created.name,
      created.age,
      created.phone,
      created.email,
    );
  }

  async findAll(): Promise<Client[]> {
    const clients = await this.prisma.client.findMany();
    return clients.map(
      (c) => new Client(c.id, c.name, c.age, c.phone, c.email),
    );
  }

  async findById(id: string): Promise<Client | null> {
    const c = await this.prisma.client.findUnique({ where: { id } });
    if (!c) return null;
    return new Client(c.id, c.name, c.age, c.phone, c.email);
  }
}
