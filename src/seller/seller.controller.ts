import { Controller, Get, Post,  Body,  Patch,  Param,  Delete, Put,
} from '@nestjs/common';
import { SellerService } from './seller.service';
import { Prisma } from '@prisma/client';

@Controller('seller')
export class SellerController {
  constructor(private readonly sellerService: SellerService) { }

  @Post()
  create(@Body() data: Prisma.SellerCreateInput) {
    return this.sellerService.createSeller(data);
  }

  @Get()
  findAll() {
    return this.sellerService.getAllSeller();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerService.getSellerById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data:Prisma.SellerUpdateInput) {
    return this.sellerService.updateSeller(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerService.deleteSeller(id);
  }
}
