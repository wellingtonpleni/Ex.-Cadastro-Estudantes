import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro'
import { CadastroService } from '../cadastro.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  selectedCadastro?: Cadastro;

  cadastro: Cadastro[] = [];

  constructor(private cadastroService: CadastroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getCadastro();
  }

  onSelect(cadastro: Cadastro): void {
    this.selectedCadastro = cadastro;
    this.messageService.add(`CadastroComponent: Selected cadastro id=${cadastro.id}`);
  }

  getCadastro(): void {
    this.cadastroService.getCadastro()
        .subscribe(cadastro => this.cadastro = cadastro);
  }

}
