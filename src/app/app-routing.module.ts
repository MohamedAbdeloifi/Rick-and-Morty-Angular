import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesComponent } from './episodes/episodes.component'
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationDetailsComponent } from './location-details/location-details.component';

const routes: Routes = [
  // home component
  { path: 'home', component: HomeComponent},
    // episodes component
  { path: 'episodes', component: EpisodesComponent },
  { path: 'episodes/:episodeId', component: EpisodeDetailsComponent },
    // characters component
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:characterId', component: CharacterDetailsComponent },
    // locations component
  { path: 'locations', component: LocationsComponent },
  { path: 'locations/:locationId', component: LocationDetailsComponent },
  // full à placer toujours en dernier
  { path: '**', redirectTo: 'home', pathMatch: 'full'},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
