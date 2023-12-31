import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = app.get(ConfigService).get('app.port');
  await app.listen(port, () =>
    console.log(`app is listening on port >>> ${port}`),
  );
}
bootstrap();
