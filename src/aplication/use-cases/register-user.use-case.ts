import { IUserRepository } from 'src/domain/interfaces/user.repository';
import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class RegisterUserUseCase {
  constructor(
    @Inject('IUserRepository') private readonly userRepository: IUserRepository,
  ) {}

  async execute(data: {
    name: string;
    email: string;
    password: string;
    age: number;
  }) {
    const { name, email, password, age } = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User(name, email, hashedPassword, age);
    return this.userRepository.save(user);
  }
}
