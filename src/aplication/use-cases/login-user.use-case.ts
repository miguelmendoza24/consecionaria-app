import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { IUserRepository } from 'src/domain/interfaces/user.repository';

export class LoginUserUSeCase {
  constructor(
    private repo: IUserRepository,
    private jwtService: JwtService,
  ) {}

  async execute(email: string, password: string) {
    const user = await this.repo.findByEmail(email);
    if (!user || !(await compare(password, user.password))) {
      throw new Error('Crendenciales invalidas');
    }
    const token = this.jwtService.sign({ sub: user.id, email: user.email });
    return { access_token: token };
  }
}
