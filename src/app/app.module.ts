import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { ListaCardPokemonComponent } from './lista-card-pokemon/lista-card-pokemon.component';
import { CardPokemonDetalheComponent } from './card-pokemon-detalhe/card-pokemon-detalhe.component';
import { BuscaPokemonPorNomeComponent } from './busca-pokemon-por-nome/busca-pokemon-por-nome.component';

@NgModule({
  declarations: [
    AppComponent,
      ListaCardPokemonComponent,
      CardPokemonDetalheComponent,
      BuscaPokemonPorNomeComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
