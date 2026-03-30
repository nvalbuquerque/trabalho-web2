export interface Funcionario {
  id?: number;
  nome: string;
  cpf: string;
  email: string;
  dataNascimento: string;
  cargo: string;
  ativo?: boolean;
}
