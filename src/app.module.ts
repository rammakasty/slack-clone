import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { LoggerMiddleware } from 'middlewares/logger.middleware';
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
  consumer.apply(LoggerMiddleware).forRoutes('*')    
  }
}


