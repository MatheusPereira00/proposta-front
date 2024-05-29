import { PropostaRequest } from './../types/PropostaRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PropostaResponse } from '../types/PropostaResponse';

@Injectable({
  providedIn: 'root'
})
export class PropostaService {

  private http = inject(HttpClient);

  public findAllPropostas(): Observable<PropostaResponse[]>{
    return this.http.get<PropostaResponse[]>(`${environment.api}`);
  }
  
  public createProposta(propostaRequest: PropostaRequest): Observable<PropostaResponse> {
    return of(propostaRequest) // Wrap request in observable
      .pipe(
        delay(4000), // Introduce 4-second delay
        tap(delayedRequest => console.log('Delayed request:', delayedRequest)), // Optional logging
        switchMap(request => this.http.post<PropostaResponse>(`${environment.api}`, request))
      );
  }
}
