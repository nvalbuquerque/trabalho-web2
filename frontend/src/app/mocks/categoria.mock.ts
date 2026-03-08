import { CategoriaEquipamento } from '../models/categoria.model';

export const mockCategoria: CategoriaEquipamento[] = [
    {
      id: 100,
      nome: "Notebook",
      descricao: "Inclui laptops e ultrabooks.",
      quantidade: 50,
   },
    {
      id: 200,
      nome: "Desktop",
      descricao: "Inclui torres e all-in-one.",
      quantidade: 30,
  },
   {
      id: 300,
      nome: "Impressora",
      descricao: "Inclui impressoras jato de tinta e laser.",
      quantidade: 20,
  },
   {
      id: 400,
      nome: "Mouse",
      descricao: "Inclui mouses ópticos e sem fio.",
      quantidade: 100,
  },
  {
      id: 500,
      nome: "Teclado",
      descricao: "Inclui teclados mecânicos e de membrana.",
      quantidade: 50,
  }
];