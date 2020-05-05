import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Pokemon, PokemonDetails } from '../pokemon';
import { PokeService } from '../poke.service';
import { strict } from 'assert';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() details: PokemonDetails
  @Output() catch: EventEmitter<any> = new EventEmitter();
  
  catched :boolean
  constructor() { }
  ngOnChanges(changes: any): void {
    this.catched = localStorage.getItem(this.details.name)? true : false
  }

  ngOnInit(): void {
    this.catched = localStorage.getItem(this.details.name)? true : false
  }
  
  onCatch(){

    console.log(localStorage.getItem(this.details.name))
    if(localStorage.getItem(this.details.name)){
      localStorage.removeItem(this.details.name)
    }
    else{
      localStorage.setItem(this.details.name, "catched")
    }
    this.catched = localStorage.getItem(this.details.name)? true : false
    this.catch.emit(this.details.name)
  }


}
