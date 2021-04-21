import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

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

}
