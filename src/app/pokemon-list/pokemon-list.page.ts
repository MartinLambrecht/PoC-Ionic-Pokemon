import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { PokemonService } from 'src/services/pokemon.service';
import { BasePokemon } from "src/models/base-pokemon.model";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'pokemon-list.page.html',
  styleUrls: ['pokemon-list.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, HttpClientModule, CommonModule],
  providers: [PokemonService]
})
export class PokemonList implements OnInit {
  pokemons!: BasePokemon[];
  currentPage=1;

  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;

  constructor(private pokemonService: PokemonService) { }

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

  getImageUrl(pokemon: BasePokemon): string {
    const splittedUrl = pokemon.url.split("/");
    const id = splittedUrl[splittedUrl.length - 2];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
