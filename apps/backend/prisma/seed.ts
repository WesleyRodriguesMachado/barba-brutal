/* eslint-disable prettier/prettier */
import { Usuario } from '@barbabrutal/core';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const senha = '$2b$10$ly34xC9Cfvtjar3pSpGC2Os5L.FipBzMMxWegqVxEraanLHWryNQW'

async function seed() {
  const usuarios: Usuario[] = [
    {
      nome: 'Marcão Machadada',
      email: 'marcao@barbabrutal.app',
      senha: senha,
      telefone: '(11) 99999-9999',
      barbeiro: true,
    },
    {
      nome: 'Leonardo Leitão',
      email: 'leonardo@formacao.dev',
      senha: senha,
      telefone: '(11) 99999-9999',
      barbeiro: false,
    },
  ];

  await prisma.usuario.deleteMany();
  await prisma.usuario.createMany({ data: usuarios as any });
}

seed();
