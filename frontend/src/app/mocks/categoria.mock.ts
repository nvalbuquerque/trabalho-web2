import { CategoriaEquipamento } from '../models/categoria.model';

export const mockCategoria: CategoriaEquipamento[] = [
    {
        id: 1,
        nome: "Laptop",
        estadoAtual: 'ATIVA',
        quantidade: 10,
   },

    {
        id: 2,
        nome: "Ultrabook",
        estadoAtual: 'ATIVA',
        quantidade: 5,
    },

    {
        id: 3,
        nome: "Desktop torre",
        estadoAtual: 'ATIVA',
        quantidade: 12,
  },

  {     
        id: 4,
        nome: "All-in-One",
        estadoAtual: 'ATIVA',
        quantidade: 2,
  },

   {
        id: 5,
        nome: "Impressora jato de tinta",
        estadoAtual: 'ATIVA',
        quantidade: 5,
  },

  {
        id: 6,
        nome: "Impressora Laser",
        estadoAtual: 'ATIVA',
        quantidade: 8,
  },

   {
        id: 7,
        nome: "Monitor LED",
        estadoAtual: 'ATIVA',
        quantidade: 2,
  },

  {
        id: 8,
        nome: "Mouse sem fio",
        estadoAtual: 'INATIVA',
        quantidade: 0,
  },

  {
        id: 9,
        nome: "Teclado mecânico",
        estadoAtual: 'INATIVA',
        quantidade: 0,
  }
];