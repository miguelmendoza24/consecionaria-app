import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserUseCase } from 'src/aplication/use-cases/register-user.use-case';

@Controller('auth')
export class UserController {
 constructor(  private readonly registerUseCase: RegisterUserUseCase) { }
  
  @Post('register')
  async register(
    @Body() body: { name: string; email: string; password: string, age: number},
  ) {
    const { name, email, password, age } = body;
    const user = await this.registerUseCase.execute({name, email, password, age});
    return {
      message: 'User registered successfully',
      user,
    };
  }
}
