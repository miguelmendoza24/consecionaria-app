import { Module } from '@nestjs/common';
import { ClientService } from 'src/infrastructure/services/client.service';
import { ClientController } from 'src/infrastructure/controllers/client.controller';
import { PrismaModule } from 'src/database/database.module';

@Module({
  imports: [PrismaModule],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule {}
