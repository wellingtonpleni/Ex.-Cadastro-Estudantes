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

  cadastro: Cadastro[] = [];

  constructor(private cadastroService: CadastroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getCadastro();
  }

  getCadastro(): void {
    this.cadastroService.getCadastro()
        .subscribe(cadastro => this.cadastro = cadastro);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.cadastroService.addAluno({ name } as Cadastro)
      .subscribe(cadastro => {
        this.cadastro.push(cadastro);
      });
  }

  delete(cadastro: Cadastro): void {
    this.cadastro = this.cadastro.filter(h => h !== cadastro);
    this.cadastroService.deleteCadastro(cadastro.id).subscribe();
  }

}
