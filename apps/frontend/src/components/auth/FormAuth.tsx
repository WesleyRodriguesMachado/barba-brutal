"use client";
import Image from "next/image";
import Logo from "../shared/Logo";
import Link from "next/link";
import useFormAuth from "@/data/hooks/useFormAuth";
import CampoSenha from "../shared/formulario/CampoSenha";
import CampoEmail from "../shared/formulario/CampoEmail";
import CampoTexto from "../shared/formulario/CampoTexto";
import CampoTelefone from "../shared/formulario/CampoTelefone";


export default function FormAuth() {
  const {
    modo,
    nome,
    email,
    senha,
    telefone,
    alternarModo,
    submeter,
    alterarEmail,
    alterarSenha,
    alterarNome,
    alterarTelefone,
  } = useFormAuth();




  return (
    <div className=" h-screen">
      <Image src="/banners/principal.webp" fill alt="Banner" />

      <div className=" flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full bg-black/80 gap-10">

        <Logo />

        <div>
          {modo === "login" ? (
            <h1 className="text-2xl font-bold"> Entre na Plataforma</h1>
          ) : (
            <h1 className="text-2xl font-bold"> Cadastre-se Plataforma</h1>
          )}
        </div>
        {/* <div>{process.env.NEXT_PUBLIC_API_URL}</div> */}
        <div className="flex flex-col gap-4 w-80">
          {modo === "cadastro" && (
            <CampoTexto
              placeholder="nome"
              value={nome}
              onChangeText={alterarNome}
            />
          )}

          <CampoEmail
            value={email}
            onChangeText={alterarEmail}
            placeholder="email"
          />

          <CampoSenha
            value={senha}
            onChangeText={alterarSenha}
            placeholder="senha"
          />
          {modo === "cadastro" && (
            <CampoTelefone
              value={telefone}
              onChangeText={alterarTelefone}
              placeholder="telefone"
            />
          )}
          <div className="flex gap-2">
            <button onClick={submeter} className="button flex-1 bg-green-600">
              {modo === "login" ? "Entrar" : "Cadastrar"}
            </button>
            <Link href="/" className="button flex justify-center flex-1">
              Cancelar
            </Link>
          </div>

          <div className=" flex my-6">
            <button onClick={alternarModo} className="flex-1 button-outline">
              {modo === "login" ? (
                <div>
                  Ainda não tem conta?{" "}
                  <span className="text-yellow-400">Cadastre-se!</span>
                </div>
              ) : (
                <div>
                  Já tem conta?{" "}
                  <span className="text-yellow-400">Entre na plataforma!</span>{" "}
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
