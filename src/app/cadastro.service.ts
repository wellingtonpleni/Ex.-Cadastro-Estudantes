import { Injectable } from '@angular/core';
import { Cadastro } from './cadastro';
import { CADASTRO } from './mock-estudantes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private alunosUrl = 'http://localhost:3000/alunos';  // URL to web api

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** GET alunos from the server */
  getCadastro(): Observable<Cadastro[]> {
    return this.http.get<Cadastro[]>(this.alunosUrl).pipe(
      tap(_ => this.log('fetched alunos')),
      catchError(this.handleError<Cadastro[]>('getCadastro', []))
    );
  }

  /** GET aluno by id. Will 404 if id not found */
  getCadastroId(id: number): Observable<Cadastro> {
    const url = `${this.alunosUrl}/${id}`;
    return this.http.get<Cadastro>(url).pipe(
      tap(_ => this.log(`fetched cadastro id=${id}`)),
      catchError(this.handleError<Cadastro>(`getCadastroId id=${id}`))
    );
  }

  /** PUT: update the aluno on the server */
  updateCadastro(cadastro: Cadastro): Observable<any> {
    const url = `${this.alunosUrl}/${cadastro.id}`;
    return this.http.put(url, cadastro, this.httpOptions).pipe(
      tap(_ => this.log(`updated cadastro id=${cadastro.id}`)),
      catchError(this.handleError<any>('updateCadastro'))
    );
  }

  /** POST: add a new aluno to the server */
  addAluno(cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.alunosUrl, cadastro, this.httpOptions).pipe(
      tap((newAluno: Cadastro) => this.log(`added cadastro w/ id=${newAluno.id}`)),
      catchError(this.handleError<Cadastro>('addAluno'))
    );
  }

  /** DELETE: delete the aluno from the server */
  deleteCadastro(id: number): Observable<Cadastro> {
    const url = `${this.alunosUrl}/${id}`;

    return this.http.delete<Cadastro>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted cadastro id=${id}`)),
      catchError(this.handleError<Cadastro>('deleteCadastro'))
    );
  }

  /** Log a CadastroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CadastroService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
