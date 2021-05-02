import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro'
import { CADASTRO } from '../mock-estudantes';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  Cadastro = CADASTRO

  cadastro: Cadastro = {
    id: 1,
    nome: 'Wellington',
    email: 'wbr@fatec.sp.gov.br',
    endereco: 'Rua 1',
    idade: 36
  }

  constructor() { }

  ngOnInit(): void {
  }

  selectedCadastro?: Cadastro;
  onSelect(cadastro: Cadastro): void {
    this.selectedCadastro = cadastro;
  }

}
