import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import PokemonListResponse from 'src/models/pokemon-list-response.model';
import { PokemonExtended } from 'src/models/pokemon-extended.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokeApiUrl = 'https://pokeapi.co/api/v2';
  constructor(private httpClient: HttpClient) {
   }

  getPokemonList(page=1,pageSize=20 ): Observable<PokemonListResponse>{
    return this.httpClient.get<PokemonListResponse>(`${this.pokeApiUrl}/pokemon?offset=${(page-1)*pageSize}?limit=${pageSize}`);
  }

  getPokemonDetails(pokemonId:number): Observable<PokemonExtended>{
    return this.httpClient.get<PokemonExtended>(`${this.pokeApiUrl}/pokemon/${pokemonId}`);
  }
}
