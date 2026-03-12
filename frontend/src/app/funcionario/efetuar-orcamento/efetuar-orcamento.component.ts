import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-efetuar-orcamento',
  standalone: true,
  imports: [],
  templateUrl: './efetuar-orcamento.component.html',
  styleUrl: './efetuar-orcamento.component.css'
})
export class EfetuarOrcamentoComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("ID da solicitação:", id);
  }

}
