import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { IUserRepository } from 'src/domain/interfaces/user.repository';

@Injectable()
export class LoginUserUseCase {
  constructor(
    private repo: IUserRepository,
    private jwtService: JwtService,
  ) {}

  async execute(email: string, password: string) {
    const user = await this.repo.findByEmail(email);
    if (!user || !(await compare(password, user.password))) {
      throw new UnauthorizedException('Crendenciales invalidas');
    }
    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload, { expiresIn: '1h' });
    return {
      access_token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        age: user.age,
      },
    };
  }
}
