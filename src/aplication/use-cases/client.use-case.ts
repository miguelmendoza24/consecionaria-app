
import { Client } from "src/domain/entities/client.entity";
import { ClientRepository } from "src/domain/repositories/client.repository";


export class RegisterClientUseCase {
  constructor(private readonly clientRepository: ClientRepository) {}

  async execute(input: Omit<Client, 'id'>): Promise<Client> {
    const newClient = new Client(
      crypto.randomUUID(),
      input.name,
      input.age,
      input.phone,
      input.email,
    );

    return this.clientRepository.create(newClient);
  }
}