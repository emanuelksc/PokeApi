import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, retry, throwError, catchError } from 'rxjs';
import { PokemonListadDTO } from '../DTO/pokemon-lista';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  ObtenerPokemon(nombre?: string): Observable<PokemonListadDTO> {
    return this.http.get<PokemonListadDTO>(
      `https://pokeapi.co/api/v2/pokemon/${nombre}`
    );
  }
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  public nTimeout: number = 20000;
  public nRetry: number = 0;
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('A ocurrido un error :', error.error.message);
    } else {
      console.error('El servidor retornó el código, ' + error.status);
    }
    return throwError(() => error.error);
  }
}
