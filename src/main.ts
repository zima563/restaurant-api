// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';
import * as cookieParser from 'cookie-parser';

function parseOrigins(env?: string): string[] {
  return (env || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  const allowed = new Set(parseOrigins(process.env.CORS_ORIGINS));

  app.enableCors({
    origin: [
      'https://queen.kitchen',
      'https://api.queen.kitchen',
      'http://localhost:5173',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
  });
  

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
  }));

  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
  app.use('/_test', express.static(join(process.cwd(), 'test-static')));

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
