import { User } from "src/domain/entities/user.entity";

export interface IUserRepository {
  save(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
