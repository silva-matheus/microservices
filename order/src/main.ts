import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { environment } from '../config/dev.env';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
// import * as csurf from 'csurf';

import * as csurf from 'fastify-csrf';
import * as fastifyRateLimit from 'fastify-rate-limit';
import { ValidationPipe, Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import * as cookieParser from 'fastify-cookie';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const microservice = app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'order',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'order-consumer',
      },
    },
  });
  app.use(helmet());
  app.enableCors();
  app.use(cookieParser, {
    secret: 'sdfgiawuet7s.jhf8y928345hsdklfus6e872o98t2',
  });
  // app.use(csurf());
  app.use(csurf, {
    cooki: true,
  });
  app.use(
     fastifyRateLimit, {
      max: 60,
      timeWindow: '1 minute',
    },
  );
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(environment.SERVER_PORT);
  await microservice.listen(() => Logger.log('Microservices Up'));
}
bootstrap();
