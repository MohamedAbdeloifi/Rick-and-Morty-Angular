// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// Bootstrap library
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// Routing
import { AppRoutingModule } from './app-routing.module';
import { EpisodesComponent } from './episodes/episodes.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EpisodesComponent,
    EpisodeDetailsComponent,
    CharactersComponent,
    CharacterDetailsComponent,
    LocationsComponent,
    LocationDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
