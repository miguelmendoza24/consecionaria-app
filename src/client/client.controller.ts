import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClientService } from './client.service';
import { Prisma } from '@prisma/client';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  create(@Body() data: Prisma.ClientCreateInput) {
    return this.clientService.createClient(data);
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
