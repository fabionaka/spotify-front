import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { spotifySearchConfig } from '../interfaces/spotify-interfaces';
import { SharedModule } from '../shared.module';

import { SpotifyApiService } from './spotify-api.service';

describe('SpotifyApiService', () => {
  let service: SpotifyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule.withRoutes([])],
    });
    service = TestBed.inject(SpotifyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetchUser should return an Observable', () => {
    expect(service.fetchUser()).toBeInstanceOf(Observable);
  });

  it('fetchCategories should return an Observable', () => {
    expect(service.fetchCategories()).toBeInstanceOf(Observable);
  });

  it('fetchCategory should return an Observable', () => {
    expect(service.fetchCategory('anyid')).toBeInstanceOf(Observable);
  });
  it('search should return an Observable', () => {
    let search: spotifySearchConfig = {
      q: 'teste',
      type: ['artist']
    }
    expect(service.search(search)).toBeInstanceOf(Observable);
  });
  it('fetchAlbum should return an Observable', () => {
    expect(service.fetchAlbum('anyid')).toBeInstanceOf(Observable);
  });
  it('fetchTrack should return an Observable', () => {
    expect(service.fetchTrack('anyid')).toBeInstanceOf(Observable);
  });
  it('fetchArtist should return an Observable', () => {
    expect(service.fetchArtist('anyid')).toBeInstanceOf(Observable);
  });
  it('fetchArtistTopTracks should return an Observable', () => {
    expect(service.fetchArtistTopTracks('anyid')).toBeInstanceOf(Observable);
  });
  it('fetchArtistAlbums should return an Observable', () => {
    expect(service.fetchArtistAlbums('anyid')).toBeInstanceOf(Observable);
  });
  it('fetchArtistRelated should return an Observable', () => {
    expect(service.fetchArtistRelated('anyid')).toBeInstanceOf(Observable);
  });
});
