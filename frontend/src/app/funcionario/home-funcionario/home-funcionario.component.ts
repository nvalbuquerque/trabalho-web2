import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Solicitacao } from '../../models/interfaces';


@Component({
  selector: 'app-home-funcionario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-funcionario.component.html',
  styleUrl: './home-funcionario.component.css'
})
export class HomeFuncionarioComponent {
solicitacoes: Solicitacao[] = [
  {
    data: '2026-03-03T10:30:00',
    descricaoEquipamento: 'Notebook Dell',
    descricaoDefeito: 'Não está carregando',
    estado: 'ABERTA' as any,
    cliente: { nome: 'Daniela' } as any
  },
  {
    data: '2026-02-06T11:10:00',
    descricaoEquipamento: 'Impressora HP',
    descricaoDefeito: 'Travando papel constantemente e imprimindo com cores erradas',
    estado: 'ABERTA' as any,
    cliente: { nome: 'Laura' } as any
  },
  {
    data: '2026-03-01T12:00:00',
    descricaoEquipamento: 'Computador',
    descricaoDefeito: 'Muito lento',
    estado: 'ABERTA' as any,
    cliente: { nome: 'Jess' } as any
  },
  {
    data: '2026-03-06T13:20:00',
    descricaoEquipamento: '1234567890123456789012345678901234567890',
    descricaoDefeito: 'Tela danificada',
    estado: 'FECHADA' as any,
    cliente: { nome: 'Nathalia' } as any
  },

    {
    data: '2026-03-06T13:20:00',
    descricaoEquipamento: '1234567890123456789012345678901234567890',
    descricaoDefeito: 'Tela trincada',
    estado: 'ABERTA' as any,
    cliente: { nome: 'Felipe' } as any
  }
];

  get solicitacoesAbertas() {
    return this.solicitacoes.filter(s => s.estado === 'ABERTA');
  }


}


