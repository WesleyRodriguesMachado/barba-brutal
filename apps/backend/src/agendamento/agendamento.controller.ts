/* eslint-disable prettier/prettier */
import { Usuario } from '@barbabrutal/core';
import { Controller, Get} from '@nestjs/common';
import { UsuarioLogado } from 'src/shared/usuario.decorator';

@Controller('agendamento')
export class AgendamentoController {

  @Get()
  teste(@UsuarioLogado() usuario: Usuario) {
    return `Agendamento para ${usuario.nome}`;
  }
}
