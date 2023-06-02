import { Module } from '@nestjs/common';
import { MicroserviceUsersController } from './microservice-users.controller';
import { MicroserviceUsersService } from './microservice-users.service';

@Module({
  imports: [],
  controllers: [MicroserviceUsersController],
  providers: [MicroserviceUsersService],
})
export class MicroserviceUsersModule {}
