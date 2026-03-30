export interface CategoriaEquipamento {
  id?: number;
  nome: string;
  quantidade: number;
  estadoAtual: 'ATIVA' | 'INATIVA';
}