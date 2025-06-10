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
import { RegisterUserUseCase } from './aplication/use-cases/register-user.use-case';
import { PrismaUserRepository } from './infrastructure/database/repositories/prisma-user.repository';
import { BcryptPasswordHasher } from './infrastructure/services/bcrypt-password-hasher.service';
import { AuthModule } from './auth/auth.module';
import { UserController } from './infrastructure/controllers/user.controller';
import { PrismaService } from './database/database.service';

@Module({
  imports: [
    CarModule,
    PrismaModule,
    ClientModule,
    AdministratorModule,
    SellerModule,
    SaleModule,
    ReturnModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    PrismaService,
    AppService,
    {
      provide: 'IUserRepository',
      useClass: PrismaUserRepository,
    },
    {
      provide: 'IPasswordHasher',
      useClass: BcryptPasswordHasher,
    },
    RegisterUserUseCase,
  ],
  exports:[RegisterUserUseCase],
})
export class AppModule {}
