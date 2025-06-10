import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserController } from 'src/infrastructure/controllers/user.controller';
import { PrismaUserRepository } from 'src/infrastructure/database/repositories/prisma-user.repository';
import { PrismaModule } from 'src/database/database.module';
import { PrismaService } from 'src/database/database.service';
import { RegisterUserUseCase } from 'src/aplication/use-cases/register-user.use-case';
import { LoginUserUseCase } from 'src/aplication/use-cases/login-user.use-case';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secreto',
      signOptions: { expiresIn: 'h1' },
    }),
    PrismaModule,
  ],
  controllers: [UserController],
  providers: [
    PrismaService,
    PrismaUserRepository,
    {
      provide: LoginUserUseCase,
      useFactory: (repo: PrismaUserRepository,  jwt: JwtService) =>
       
        new LoginUserUseCase(repo, jwt),
      inject: [PrismaUserRepository, JwtService],
    },
    {
      provide: 'IUserRepository',
      useClass: PrismaUserRepository,
    },
    RegisterUserUseCase,
  ],
})
export class AuthModule {}
