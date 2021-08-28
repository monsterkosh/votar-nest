import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeController } from './controllers/HomeController';
import { UserController } from './controllers/UserController';
import { HomeService } from './services/HomeService';
import { UserService } from './services/UserService';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [HomeController, UserController],
  providers: [HomeService, UserService],
})
export class AppModule {}