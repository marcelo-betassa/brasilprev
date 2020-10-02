import { BuscaPokemonPorNomeComponent } from './busca-pokemon-por-nome/busca-pokemon-por-nome.component';
import { CardPokemonDetalheComponent } from './card-pokemon-detalhe/card-pokemon-detalhe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCardPokemonComponent } from './lista-card-pokemon/lista-card-pokemon.component';


const routes: Routes = [
  {path: 'cards-pokemon', component: ListaCardPokemonComponent},
  {path: 'pokemon', component: CardPokemonDetalheComponent},
  {path: 'porNome', component: BuscaPokemonPorNomeComponent},
  {path: '', redirectTo: 'cards-pokemon', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
