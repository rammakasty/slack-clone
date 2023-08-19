import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

const getEnv = () => {
  return {
  }
}

@Module({
  imports: [ConfigModule.forRoot( { isGlobal: true}), UsersModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}


