/* eslint-disable prettier/prettier */
import { profissionais, servicos, Usuario } from '@barbabrutal/core';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const senha = '$2b$10$ly34xC9Cfvtjar3pSpGC2Os5L.FipBzMMxWegqVxEraanLHWryNQW';

async function seed() {

 // await prisma.profissional.deleteMany();
  await prisma.profissional.createMany({
    data: profissionais as any,
  });


   //await prisma.servico.deleteMany();
  await prisma.servico.createMany({
    data: servicos as any,
  });

  const usuarios: Usuario[] = [
    {
      nome: 'Marcão Machadada',
      email: 'marcao@barbabrutal.app',
      senha,
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

  //await prisma.usuario.deleteMany();
  await prisma.usuario.createMany({ data: usuarios as any });
}

seed();
