import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-busca-pokemon-por-nome',
  templateUrl: './busca-pokemon-por-nome.component.html',
  styleUrls: ['./busca-pokemon-por-nome.component.css']
})
export class BuscaPokemonPorNomeComponent implements OnInit {

  nome: string;

  listPokemon: any[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  buscaPorNome(nome: string) {
    console.log('nome', nome);

    this.pokemonService.buscaPorNome(nome).subscribe((pokemons: any[]) => {
      Object.values(pokemons).forEach(pokemon => {
        this.listPokemon = pokemon;

      });
      console.log('Pokemons', this.listPokemon);
    },
    (error) => {
      console.log('nome não encontardo');

    });
  }

}
