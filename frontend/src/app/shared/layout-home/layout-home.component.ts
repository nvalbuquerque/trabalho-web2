import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-layout-home',
  standalone: true,
  imports: [
    CommonModule, 
    MatTableModule, 
    MatIconModule, 
    MatInputModule, 
    MatFormFieldModule],
  templateUrl: './layout-home.component.html',
  styleUrl: './layout-home.component.css'
})
export class LayoutHomeComponent {

  @Input() dados: any[] = [];
  @Input() colunas: string[] = [];
  @Input() titulosColunas: { [key: string]: string } = {};
  @Input() placeholderBusca: string = 'Buscar...';
  @Output() aoVisualizar = new EventEmitter<any>();
  @Output() aoDigitarBusca = new EventEmitter<string>();

  onBusca(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.aoDigitarBusca.emit(filterValue);
  }
}
