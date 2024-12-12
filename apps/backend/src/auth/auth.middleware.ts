/* eslint-disable prettier/prettier */
import { Usuario } from '@barbabrutal/core';
import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UsuarioPrisma } from './usuario.prisma';

@Injectable()
export class AuthMiddleware implements NestMiddleware {

constructor(private readonly repo: UsuarioPrisma){}


  use(req: any, res: any, next: () => void) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    console.log('estou no middleware');
    console.log('token', token);
    try {
      if (!token) {
        throw new HttpException('Token não informado', 401);
      }

      const payload = jwt.verify(token, process.env.JWT_SECRET!) as Usuario;
      if (!payload) {
        throw new HttpException('Token Invalido', 401);
      }
      const usuario = this.repo.buscarPorEmail(payload.email)

      if (!usuario) {
        throw new HttpException('Usuario Não econtrado', 401);
      }

      req.usuario = usuario;
      next();
    } catch (error) {
      console.log(error);
      throw new HttpException('Token Invalido ', 401);
    }
  }
}
