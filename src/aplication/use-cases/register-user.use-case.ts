import { IUserRepository } from 'src/domain/interfaces/user.repository';
import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';

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
    const user = new User(name, email, password, age)
    return this.userRepository.save(user);
  }
}
