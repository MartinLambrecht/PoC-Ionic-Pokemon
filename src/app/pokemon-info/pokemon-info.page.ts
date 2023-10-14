import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonExtended } from '../../models/pokemon-extended.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'pokemon-info.page.html',
  styleUrls: ['pokemon-info.page.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule, CommonModule, RouterModule],
  providers: [PokemonService]
})
export class PokemonInfoPage implements OnInit {
  pokemonId!: number;

  pokemonData$!: Observable<PokemonExtended>;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.pokemonData$ = this.pokemonService.getPokemonDetails(params['pokemonId'] ?? 1);
    });
  }
}
