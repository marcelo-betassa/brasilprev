import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { AtaqueList } from '../model';

@Component({
  selector: 'app-card-pokemon-detalhe',
  templateUrl: './card-pokemon-detalhe.component.html',
  styleUrls: ['./card-pokemon-detalhe.component.css']
})
export class CardPokemonDetalheComponent implements OnInit {
  id: string;
  pokemon: any;
  ataqueList: AtaqueList;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.id.subscribe((id) => {
      this.id = id;
      console.log(id);

    });
    this.pokemonService.getDetalhe(this.id).subscribe((pokemon: any) => {
      Object.values(pokemon).forEach(pokemonCard => {
        this.pokemon = pokemonCard;
      });

      Object.values(this.pokemon.attacks).forEach((ataque: any) => {
        this.ataqueList = ataque;
      });
      console.log('ataque' , this.ataqueList );

      console.log('img ', this.pokemon.imageUrlHiRes);
      console.log('pokemon', this.pokemon);

    });
  }

}
