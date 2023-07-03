import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExemploMiddleware } from './middleware/exemplo/exemplo.middleware';
import { OutroexemploMiddleware } from './middleware/outroexemplo/outroexemplo.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  //configurando o middleware para as rotas
  configure(consumer: MiddlewareConsumer) {
    //ativa para todos os metodos das rotas
    //consumer.apply(ExemploMiddleware).forRoutes('users');

    consumer
      .apply(ExemploMiddleware)
      .forRoutes(
        {
          path: 'users',
          method: RequestMethod.GET,
        },
        {
          path: 'users/:id',
          method: RequestMethod.GET,
        },
      )
      .apply(OutroexemploMiddleware)
      .forRoutes(
        {
          path: 'users',
          method: RequestMethod.GET,
        },
        {
          path: 'users/:id',
          method: RequestMethod.GET,
        },
      );
  }
}
