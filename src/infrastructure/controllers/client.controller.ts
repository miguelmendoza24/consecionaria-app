import {
  Body,
  Controller,
  Post,
  Put,
  Delete,
  Param,
  Get,
} from '@nestjs/common';
import { RegisterClientUseCase } from 'src/aplication/use-cases/client.use-case';
import { PrismaService } from 'src/database/database.service';
import { PrismaClientRepository } from 'src/infrastructure/database/repositories/prisma-client.repository';
import { ClientService } from 'src/infrastructure/services/client.service';
import { Prisma } from '@prisma/client';

@Controller('client')
export class ClientController {
  private readonly useCase: RegisterClientUseCase;
  private readonly clientService: ClientService;

  constructor(clientService: ClientService, prisma: PrismaService) {
    this.clientService = clientService;
    const repo = new PrismaClientRepository(prisma);
    this.useCase = new RegisterClientUseCase(repo);
  }

  @Post()
  async create(
    @Body() body: { name: string; age: number; phone: string; email: string },
  ) {
    return this.clientService.createClient(body);
  }

  @Get()
  findAll() {
    return this.clientService.getAllClients();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.getClientById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.ClientUpdateInput) {
    return this.clientService.updateClient(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientService.deleteClient(id);
  }
}
