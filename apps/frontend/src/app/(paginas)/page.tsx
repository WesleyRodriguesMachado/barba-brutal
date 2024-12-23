import NossosClientes from "@/components/cliente/NossosClientes";
import Slogan from "@/components/landing/Slogan";
import NossosProfissionais from "@/components/profissional/NossosProfissionais";
import NossosServicos from "@/components/servico/NossosServicos";

import Rodape from "@/components/shared/Rodape";
import SecaoBackground from "@/components/shared/SecaoBackground";

export default function Landing() {
  return (
    <div className=" flex flex-col  ">
      <Slogan />
      {/* <div className="container py-10">
        <h1 className="text-6xl ">Landing Page</h1>
      </div> */}

      <SecaoBackground imagem="/banners/servicos.webp">
        <NossosServicos />
      </SecaoBackground>

      <SecaoBackground imagem="/banners/profissionais.webp">
        <NossosProfissionais />
      </SecaoBackground>

      <SecaoBackground imagem="/banners/clientes.webp">
        <NossosClientes />
      </SecaoBackground>

      <Rodape />
    </div>
  );
}
