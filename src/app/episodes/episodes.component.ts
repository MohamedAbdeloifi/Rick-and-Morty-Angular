import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  seasons$: Observable<any>;
  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.loadDataEpisodes();
  }

  loadDataEpisodes() {
    this.seasons$ = this.rickAndMortyService.getEpisodes();
  }

}
