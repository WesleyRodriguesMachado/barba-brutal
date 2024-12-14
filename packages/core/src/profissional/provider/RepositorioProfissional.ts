import Profissional from "../../profissional/model/Profissional";

export default interface RepositorioProfissional {
  buscarTodos(): Promise<Profissional[]>;
}
