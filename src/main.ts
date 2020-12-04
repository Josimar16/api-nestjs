import 'reflect-metadata';
import 'express-async-errors';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@shared/providers/ModuleProvider/app.module';
import '@shared/infra/typeorm';
import { NextFunction, Request, Response } from 'express';
import AppError from '@shared/errors/AppError';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Tratamento de erro global
  app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError)
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
  
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
