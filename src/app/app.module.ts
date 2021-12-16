import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyAuthModule } from './modules/spotify-auth/spotify-auth.module';
import { UserComponent } from './components/user/user.component';
import { SharedModule } from './shared/shared.module';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { CategoriesViewComponent } from './components/categories/categories-view/categories-view.component';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { AlbumsComponent } from './components/albums/albums.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CategoriesListComponent,
    CategoriesViewComponent,
    SearchComponent,
    SearchResultsComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpotifyAuthModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
