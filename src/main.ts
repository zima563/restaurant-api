import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';
import * as os from 'os';
import * as dns from 'dns';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  // ✅ CORS settings
  app.enableCors({
    origin: ['https://127.0.0.1:5500', 'https://localhost:5173'],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
  });

  app.use('/_test', express.static(join(process.cwd(), 'test-static')));

  // ✅ حل نهائي للـ preflight CORS/OPTIONS requests (أي طلب OPTIONS هيرجع الهيدرز المطلوبة)
  app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      );
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      );
      res.header('Access-Control-Allow-Credentials', 'true');
      return res.status(204).send();
    }
    next();
  });

  // ✅ Pipes & Static
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  // ✅ Listen
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');

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
