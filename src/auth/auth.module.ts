import { Module } from '@nestjs/common';
import { AuthController } from 'src/infrastructure/controllers/auth.controller';
import { RegisterUserUseCase } from 'src/aplication/use-cases/register-user.use-case';
import { PrismaUserRepository } from 'src/infrastructure/database/repositories/prisma-user.repository';
import { BcryptPasswordHasher } from 'src/infrastructure/services/bcrypt-password-hasher.service';
import { PrismaModule } from 'src/database/database.module';
import { UserController } from 'src/infrastructure/controllers/user.controller';
import { PrismaService } from 'src/database/database.service';
@Module({
  imports:[PrismaModule],
  controllers: [UserController],
  providers: [
    PrismaService,
    {
      provide: 'IUserRepository',
      useClass: PrismaUserRepository,
    },
  RegisterUserUseCase,
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
})
export class AuthModule {}
