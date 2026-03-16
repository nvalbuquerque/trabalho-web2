export interface Funcionario {
  id?: number;
  nome: string;
  email: string;
  dataNascimento: string;
  cargo: string;
  ativo?: boolean;
}
