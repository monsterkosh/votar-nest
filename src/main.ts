import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Environment } from './configs/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
  await Environment.getEnvironment();
}
bootstrap();
