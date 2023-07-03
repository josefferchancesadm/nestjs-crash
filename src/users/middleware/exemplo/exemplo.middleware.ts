import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExemploMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Exemplo de Middleware');
    //pega o token do cabeçalho
    const { authorization } = req.headers;
    //console.log(authorization);
    if (!authorization) {
      throw new HttpException('Não encontrado um token!', HttpStatus.FORBIDDEN);
    }
    if (authorization === '123') next();
    else throw new HttpException('Token não autorizado', HttpStatus.FORBIDDEN);
  }
}
