import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-popkemon-list';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {
  pokemonList : Pokemon[] = POKEMONS;
  constructor() { }

  ngOnInit(): void {
  }

}
