import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  cadastro: Cadastro[] = [];

  constructor(private cadastroService: CadastroService) { }

  ngOnInit() {
    this.getAlunos();
  }

  getAlunos(): void {
    this.cadastroService.getCadastro()
      .subscribe(alunos => this.cadastro = alunos.slice(1, 5));
  }
}