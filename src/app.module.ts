import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { PrismaModule } from './database/database.module';
import { ClientModule } from './infrastructure/modules/client.module';
import { AdministratorModule } from './administrator/administrator.module';
import { SellerModule } from './seller/seller.module';
import { SaleModule } from './sale/sale.module';
import { ReturnModule } from './return/return.module';

@Module({
  imports: [
    CarModule,
    PrismaModule,
    ClientModule,
    AdministratorModule,
    SellerModule,
    SaleModule,
    ReturnModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
