import { Module } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { AdministratorController } from './administrator.controller';

@Module({
  providers: [AdministratorService],
  controllers: [AdministratorController]
})
export class AdministratorModule {}
