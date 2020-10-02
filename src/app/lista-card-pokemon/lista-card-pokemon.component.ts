import { Pokemon } from './../model';
import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-card-pokemon',
  templateUrl: './lista-card-pokemon.component.html',
  styleUrls: ['./lista-card-pokemon.component.css'],
})
export class ListaCardPokemonComponent implements OnInit {
  pokemons: Pokemon[];

  constructor(private pokemonService: PokemonService, private route: Router) {}

  ngOnInit(): void {
    this.pokemonService.getCards().subscribe((cardsPokemons: any[]) => {
      console.log('log cardPokemon', cardsPokemons);
      Object.values(cardsPokemons).forEach((card) => (this.pokemons = card));
      // this.pokemons = cardsPokemons;
      this.pokemons.sort((a, b) =>   {
        const textA = a.name.toLowerCase();
        const textB = b.name.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
       });
    });
  }

  detalhes(id: string) {
    this.pokemonService.id.next(id);
    this.route.navigate(['/pokemon']);
  }
}
