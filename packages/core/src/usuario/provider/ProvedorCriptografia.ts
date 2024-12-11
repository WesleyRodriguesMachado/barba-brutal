export default interface ProvedorCriptografia {
  criptografar(senha: string): Promise<string>;
  comparar(senha: string, SenhaCriptografada: string): Promise<boolean>;
}
