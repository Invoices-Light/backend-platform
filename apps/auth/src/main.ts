import { useContainer } from 'class-validator';
import helmet from 'helmet';

import { NestFactory } from '@nestjs/core';

import AppModule from '@auth/app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();
  app.use(helmet());

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(3000);
};

void bootstrap();
