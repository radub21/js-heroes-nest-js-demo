import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

function generateSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Standup Comedians Library API')
    .setDescription('Use this to test the API')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  generateSwagger(app);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
