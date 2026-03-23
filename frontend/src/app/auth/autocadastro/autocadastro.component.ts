import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-autocadastro',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterLink, 
    HttpClientModule,
    MatCardModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatIconModule
  ],
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class AutocadastroComponent {
  cliente = {
    cpf: '', 
    nome: '', 
    email: '', 
    telefone: '', 
    cep: '',
    logradouro: '', 
    numero: '', 
    bairro: '', 
    cidade: '', 
    estado: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  buscarEnderecoPorCep() {
    const cep = this.cliente.cep.replace(/\D/g, '');
    if (cep.length === 8) {
      this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe((dados: any) => {
        if (!dados.erro) {
          this.cliente.logradouro = dados.logradouro;
          this.cliente.bairro = dados.bairro;
          this.cliente.cidade = dados.localidade;
          this.cliente.estado = dados.uf;
        }
      });
    }
  }

  salvarCadastro() {
  if (this.cliente.nome) {
    localStorage.setItem('nomeUsuarioCadastrado', this.cliente.nome);
  }
  alert('Cadastro realizado com sucesso! Use seu e-mail para logar.');
    this.router.navigate(['/login']);
  }
}