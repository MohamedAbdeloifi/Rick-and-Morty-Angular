import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters$: Observable<any>;
  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.loadDataCharacters();
  }

  loadDataCharacters() {
    this.characters$ = this.rickAndMortyService.getCharacters();
    this.rickAndMortyService.getCharacters().subscribe(console.log)
  }

  changePageByUrl(url:string){
    if (url != 'null') {
      this.characters$ = this.rickAndMortyService.getByUrl(url);
    }else{
      return false;
    }
  }

  onChecked(event){
    let value = event.target.value;
    if(value != 'All'){
        this.characters$ = this.rickAndMortyService.getCharactersBySpecie(value);
    }else{  this.characters$ = this.rickAndMortyService.getCharacters(); }
  }

}
