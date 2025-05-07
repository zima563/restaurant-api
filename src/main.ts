import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';
import * as os from 'os';
import * as dns from 'dns';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log(`🚀 Server running on http://localhost:${port}`);

  // ✅ طباعة الـ IP اللي NestJS بيبعت منه
  dns.lookup(os.hostname(), (err, address) => {
    if (err) {
      console.error('❌ Failed to resolve IP:', err.message);
    } else {
      console.log('➡️ Outgoing IP used by NestJS:', address);
    }
  });
}
bootstrap();
