/* eslint-disable prettier/prettier */

import { ProvedorCriptografia } from '@barbabrutal/core';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptProvider implements ProvedorCriptografia {
  async criptografar(senha: string): Promise<string> {
    const salt = await bcrypt.genSaltSync(10);
    return bcrypt.hash(senha, salt);
  }
  async comparar(senha: string, SenhaCriptografada: string): Promise<boolean> {
    return bcrypt.compare(senha, SenhaCriptografada)
  }
}
