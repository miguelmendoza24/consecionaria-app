import { Controller, Post, Body } from "@nestjs/common";
import { RegisterUserUseCase } from "src/aplication/use-cases/register-user.use-case";


@Controller('auth')
export class AuthController {
  constructor(private readonly registerUser: RegisterUserUseCase) {}

  @Post('register')
  async register(@Body() body: any) {
    return this.registerUser.execute(body);
  }

}