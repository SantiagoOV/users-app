import { Controller, Get } from '@nestjs/common';
import { MicroserviceUsersService } from './microservice-users.service';

@Controller()
export class MicroserviceUsersController {
  constructor(private readonly microserviceUsersService: MicroserviceUsersService) {}

  @Get()
  getHello(): string {
    return this.microserviceUsersService.getHello();
  }
}
