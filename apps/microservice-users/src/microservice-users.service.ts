import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceUsersService {
  getHello(): string {
    return 'Hello World!';
  }
}
