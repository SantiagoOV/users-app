import { Test, TestingModule } from '@nestjs/testing';
import { MicroserviceUsersController } from './microservice-users.controller';
import { MicroserviceUsersService } from './microservice-users.service';

describe('MicroserviceUsersController', () => {
  let microserviceUsersController: MicroserviceUsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicroserviceUsersController],
      providers: [MicroserviceUsersService],
    }).compile();

    microserviceUsersController = app.get<MicroserviceUsersController>(MicroserviceUsersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microserviceUsersController.getHello()).toBe('Hello World!');
    });
  });
});
