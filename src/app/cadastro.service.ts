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

  getCadastroId(id: number): Observable<Cadastro> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const cadastro = CADASTRO.find(h => h.id === id)!;
    this.messageService.add(`CadastroService: fetched cadastro id=${id}`);
    return of(cadastro);
  }
}
