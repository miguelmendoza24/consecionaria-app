import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdministratorService } from './administrator.service';

@Controller('administrators')
export class AdministratorController {
  constructor(private readonly adminService: AdministratorService) {}

  @Post()
  create(@Body() data) {
    return this.adminService.create(data);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data) {
    return this.adminService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(id);
  }
}
