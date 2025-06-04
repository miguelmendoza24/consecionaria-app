import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
import { IUserRepository } from 'src/domain/interfaces/user.repository';
import { User } from 'src/domain/entities/user.entity';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(user: User): Promise<User> {
    const newUser = await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        age: user.age,
      },
    });

    return new User(
      newUser.name,
      newUser.email,
      newUser.password,
      newUser.age,
      newUser.id,
    );
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    return user
      ? new User(user.name, user.email, user.password, user.age, user.id)
      : null;
  }
}
