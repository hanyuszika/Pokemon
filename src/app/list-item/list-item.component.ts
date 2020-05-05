import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke.service';
import { Pokemon, PokemonDetails } from '../pokemon';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  pokemons: any;
  pokemonTypes: any;
  selectedPokemon: PokemonDetails;
  searchText: string
  checkbox: boolean
  catchedFilter: string
  storage: any;
  isLoading: boolean = true;
  constructor(
    private pokeService: PokeService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.pokeService.getTypes().subscribe(
        data => {
          this.isLoading = false;
          this.pokemonTypes = JSON.parse(localStorage.getItem('types'));
        },
        err => {
          return console.log(err);
        }
      )
    }, 1000);
    
  }

  onCheckBoxChanged(value) {
    console.log(value)
    if (value == true) {
      this.catchedFilter = "Catched"
    }
    else {
      this.catchedFilter = ""
    }
  }

  onChange(typeValue) {
    console.log(typeValue);
    this.isLoading = true;
    this.pokeService.getPokemons(typeValue).subscribe(
      data => {
        let pokemons = data.pokemon;
        let temp = [];
        for (let pokemon of pokemons) {
          let poke: Pokemon = {
            name: pokemon.pokemon.name,
            url: pokemon.pokemon.url,
            catched: localStorage.getItem(pokemon.pokemon.name) ? "Catched" : "-"
          };
          temp.push(poke);
        }
        this.pokemons = temp;
        this.isLoading = false;
      },
      err => {
        return console.log(err);
      }
    )
  }

  onCatch(name) {
    console.log("name: " + name)
    for (let pokemon of this.pokemons) {
      if (pokemon.name == name) {
        pokemon.catched = localStorage.getItem(name) ? "Catched" : "-"
      }
    }
  }

  getPokemon(url: string) {
    this.isLoading=true
    this.pokeService.getPokemonDetails(url).subscribe(
      data => {
        let abilities = []
        for (let item of data.abilities) {
          if (item.is_hidden == false) {
            abilities.push(item.ability.name)
          }
        }
        this.selectedPokemon = {
          name: data.name,
          image: data.sprites.front_default,
          weight: data.weight,
          height: data.height,
          abilities: abilities
        }
        console.log(this.selectedPokemon)
        this.isLoading=false
      },
      error => {
        console.log("error: " + error.message);
      }
    )
  }
}
