// 3:37.00
import { Component,OnInit } from '@angular/core';
import { POKEMONS } from './mock-popkemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`
})
export class AppComponent /* implements OnInit */ {
/*
  pokemonList : Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;
*/
  title: string = "Ma liste de pokémons";
/*
  ngOnInit() : void {
//    console.table(this.pokemonList);
//    this.selectPokemon(this.pokemonList[0]);
  }  

  selectPokemon(pokemon: Pokemon ) {
    // const index:number = Number((event.target as HTMLInputElement.value));
    // code équivalent et plus élégant ci-dessous
    // const index: number = +(event.target as HTMLInputElement).value;
    // const id = +pokemonId;
//    const pokemon: Pokemon|undefined = this.pokemonList.find( pokemon=>pokemon.id == +pokemonId)
    if (pokemon) {
      console.log(`vous demandâtes le pokémon ${pokemon.name}`)
      this.pokemonSelected = pokemon;
    } else {
      console.log(`vous demandâtes  un  pokémon qui n'existe pas`);
      this.pokemonSelected = pokemon;
    }   
  }
*/  
}
