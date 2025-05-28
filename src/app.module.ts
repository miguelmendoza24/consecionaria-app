import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { PrismaModule } from './prisma/prisma.module';
import { ClientModule } from './client/client.module';
import { AdministratorModule } from './administrator/administrator.module';

@Module({
  imports: [CarModule, PrismaModule, ClientModule, AdministratorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
