import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonInfiniteScroll, IonicModule } from '@ionic/angular';
import { PokemonService } from '../../services/pokemon.service';
import { BasePokemon } from '../../models/base-pokemon.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'pokemon-list.page.html',
  styleUrls: ['pokemon-list.page.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule, CommonModule, RouterModule],
  providers: [PokemonService]
})
export class PokemonListPage implements OnInit {
  pokemons!: BasePokemon[];
  currentPage = 1;

  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;

  constructor(private pokemonService: PokemonService, private router:Router) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonList(this.currentPage).subscribe(response => {
      this.pokemons = response.results;
      this.currentPage++;
    });
  }

  loadData() {
    this.pokemonService.getPokemonList(this.currentPage).subscribe(response => {
      this.pokemons.push(...response.results);
      this.currentPage++;
      this.infiniteScroll.complete();
    });
  }

  onPokemonClick(pokemon:BasePokemon){
    this.router.navigate(['/tabs/details'], { queryParams: { pokemonId:this.getPokemonId(pokemon) }});
  }

  getPokemonId(pokemon: BasePokemon){
    const splittedUrl = pokemon.url.split("/");
    const id = splittedUrl[splittedUrl.length - 2];
    return id;
  }

  getImageUrl(pokemon: BasePokemon): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getPokemonId(pokemon)}.png`;
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
