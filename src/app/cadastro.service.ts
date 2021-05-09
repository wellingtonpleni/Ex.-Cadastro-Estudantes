import { Injectable } from '@angular/core';
import { Cadastro } from './cadastro';
import { CADASTRO } from './mock-estudantes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private messageService: MessageService) { }

  getCadastro(): Observable<Cadastro[]> {
    const alunos = of(CADASTRO);
    this.messageService.add('CadastroService: fetched alunos');
    return alunos;
  }
}
