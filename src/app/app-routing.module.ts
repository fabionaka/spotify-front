import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { CategoriesViewComponent } from './components/categories/categories-view/categories-view.component';
import { SearchComponent } from './components/search/search.component';
import { TrackComponent } from './components/track/track.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'me',
    pathMatch: 'full'
  },
  {
    path: 'me',
    component: UserComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'categories',
    component: CategoriesListComponent,
  },
  {
    path: 'categories/:categoryId',
    component: CategoriesViewComponent,
  },
  {
    path: 'album/:albumId',
    component: AlbumComponent
  },
  {
    path: 'track/:trackId',
    component: TrackComponent
  },
  {
    path: 'artist/:artistId',
    component: ArtistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
