import { Client } from '../../../domain/entities/client.entity';

export abstract class ClientRepository {
  abstract create(client: Client): Promise<Client>;
  abstract findAll(): Promise<Client[]>;
  abstract findById(id: string): Promise<Client | null>;
}
