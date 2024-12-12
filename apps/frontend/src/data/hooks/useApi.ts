import useSessao from "./useSessao";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function useApi() {

  const {token} =useSessao()

  const urlBase = process.env.NEXT_PUBLIC_API_URL;

  async function httpGet(caminho: string) {
    const uri = caminho.startsWith("/") ? caminho : `/${caminho}`;
    const urlCompleta = `${urlBase}${uri}`;

    const resposta = await fetch(urlCompleta, {
      headers:{
        Authorization: `Bearer ${token}`
      }
    });
    return extrairDados(resposta);
  }

   async function httpPost(caminho: string, body: any) {
     const uri = caminho.startsWith("/") ? caminho : `/${caminho}`;
     const urlCompleta = `${urlBase}${uri}`;

     const resposta = await fetch(urlCompleta, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
       },
       body: JSON.stringify(body),
     });
     return extrairDados(resposta);
   }

  async function extrairDados(resposta: Response) {
    let conteudo = ''
    try {
       conteudo = await resposta.text();
      return JSON.parse(conteudo);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      return conteudo;
    }
  }

  return { httpGet, httpPost };
}
