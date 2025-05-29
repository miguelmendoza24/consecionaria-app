import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SaleService } from './sale.service';
import { Prisma } from '@prisma/client';

@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Post()
  create(@Body() data: Prisma.SaleCreateInput) {
    return this.saleService.createSale(data);
  }

  @Get()
  findAll() {
    return this.saleService.getAllSale();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleService.getSaleById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.SaleUpdateInput) {
    return this.saleService.updateSale(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleService.deleteSale(id);
  }
}
