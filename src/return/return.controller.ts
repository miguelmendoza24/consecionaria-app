import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ReturnService } from './return.service';
import { Prisma } from '@prisma/client';

@Controller('return')
export class ReturnController {
  constructor(private readonly returnService: ReturnService) { }

  @Post()
  create(@Body() data: Prisma.ReturnCreateInput) {
    return this.returnService.createReturn(data);
  }

  @Get()
  findAll() {
    return this.returnService.getAllReturn();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.returnService.getReturnById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.ReturnUpdateInput) {
    return this.returnService.updateReturn(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.returnService.deleteReturn(id);
  }
}
