import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nome',
  standalone: true
})
export class NomePipe implements PipeTransform {

  private excecoes = ['de', 'da', 'do', 'das', 'dos', 'e'];

  transform(valor: string): string {
    if (!valor) return '';

    return valor
      .toLowerCase()
      .split(' ')
      .map((palavra, index) => {

        // as iniciais em letra maiúscula, menos as exceções
        if (index === 0) {
          return this.capitalize(palavra);
        }

        if (this.excecoes.includes(palavra)) {
          return palavra;
        }

        return this.capitalize(palavra);
      })
      .join(' ');
  }

  private capitalize(palavra: string): string {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
  }
}