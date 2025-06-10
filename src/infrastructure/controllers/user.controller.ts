import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserUseCase } from 'src/aplication/use-cases/register-user.use-case';
import { LoginUserUseCase } from 'src/aplication/use-cases/login-user.use-case';
import { LoginUserDTO } from 'src/domain/dto/loging-user.dto';


@Controller('auth')
export class UserController {
  constructor(private readonly registerUseCase: RegisterUserUseCase,
   private readonly loginUseCase: LoginUserUseCase
 ) { }
  
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

  @Post('login')
  async login(@Body() loginDTO: LoginUserDTO) {
    const { email, password } = loginDTO;
    const user = await this.loginUseCase.execute(email, password)
    return {
      message: 'Login seccesful',
      ...user,
      }
    }
  }
