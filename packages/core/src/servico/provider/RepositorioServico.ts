import Servico from "../model/Servico";


export default interface RepositorioServicol {
  buscarTodos(): Promise<Servico[]>;
}
