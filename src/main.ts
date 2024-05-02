import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LogInterceptor } from './interceptors/log';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  //para fazer interceptor global
  app.useGlobalInterceptors(new LogInterceptor())
  await app.listen(3000);

}
bootstrap();
