import { PropostaRequest } from './../types/PropostaRequest';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, delay, of, switchMap, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PropostaResponse } from '../types/PropostaResponse';

@Injectable({
  providedIn: 'root'
})
export class PropostaService {

  private http = inject(HttpClient);


  public findAllPropostas(): Observable<PropostaResponse[]> {
    return this.http.get<PropostaResponse[]>(`${environment.api}`)
      .pipe(
        catchError(error => {
          if (error.status === 500) {
            return throwError(new Error('Propostas não encontradas.'));
          } else {
            return throwError(error);
          }
        })
      );
  }


  public createProposta(propostaRequest: PropostaRequest): Observable<PropostaResponse> {
    return of(propostaRequest) // Wrap request in observable
      .pipe(
        delay(4000), // Introduce 4-second delay
        tap(delayedRequest => console.log('Delayed request:', delayedRequest)), // Optional logging
        switchMap(request => this.http.post<PropostaResponse>(`${environment.api}`, request).pipe(
          
        ))
      );
  }
}



