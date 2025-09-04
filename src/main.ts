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

  // اكتب الـ origins المسموح بيها في ENV كقائمة مفصولة بفواصل
  // مثال: CORS_ORIGINS=http://localhost:5173,https://app.yourdomain.com
  const allowed = new Set(parseOrigins(process.env.CORS_ORIGINS));

  app.enableCors({
    origin: (origin, cb) => {
      // طلبات بدون Origin (مثلاً من Postman) نسمح لها
      if (!origin) return cb(null, true);
      if (allowed.has(origin)) return cb(null, true);
      return cb(new Error(`CORS blocked for origin: ${origin}`), false);
    },
    credentials: true,
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE','OPTIONS'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
  });

  // ✳️ متحتاجش Middleware يدوي للـ OPTIONS؛ enableCors كافي
  // سيب ثابتاتك زي ما هي:
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
