import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { MicroserviceUsersModule } from './microservice-users.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MicroserviceUsersModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
