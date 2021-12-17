import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TokenService } from 'src/app/modules/spotify-auth/services/token.service';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SpotifyUser } from '../models/spotify-models.model';
import { spotifyApiConfig } from '../interfaces/spotify-api-config';
import { spotifySearchConfig } from '../interfaces/spotify-interfaces';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {

  config: spotifyApiConfig = {
    apiUrl: "https://api.spotify.com/v1",
    endpoint: {
      user: "/me",
      categories: "/browse/categories",
      search: "/search",
      albums: "/albums",
      tracks: "/tracks",
      artists: "/artists",
    }

  }
  /**
   * Header enviados para a API
   * Sem o bearer a API nao aceita requisicao (401)
   *
   * @type {HttpHeaders}
   * @memberof SpotifyApiService
   */
  headers: HttpHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router,
  ) {

    this.tokenService.hasTokens.subscribe(t => {
      // Adds the auth Token to the API calls
      if (!!t) {
        this.headers = this.headers.set('Authorization', "Bearer " + t);
      } else {
        this.router.navigate(['login']);
      }

    });
  }
  /**
   * User info fetch (logged user)
   *
   * TODO: Adicionar ErroHandling
   * @returns
   * @memberof SpotifyApiService
   */
  public fetchUser(): Observable<SpotifyUser> {
    return this.http.get(this.config.apiUrl + this.config.endpoint.user, { headers: this.headers }).pipe(map(u => {
      return Object.assign(new SpotifyUser, u);
    })
      //, erroCatch() colocar depois
    )
  }


  /**
   *Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
   *
   * @memberof SpotifyApiService
   */
  public fetchCategories(): Observable<any> {
    return this.http.get(this.config.apiUrl + this.config.endpoint.categories, { headers: this.headers }).pipe(map(c => {
      return c
    })
      //, erroCatch() colocar depois
    )
  }

  public fetchCategory(categoryId: string | null): Observable<any> | undefined {
    if (categoryId === null) return;
    return this.http.get(this.config.apiUrl + this.config.endpoint.categories + "/" + categoryId, { headers: this.headers }).pipe(map(c => {
      return c
    })
      //, erroCatch() colocar depois
    )
  }

  /**
   *  Get Spotify catalog information about albums, artists, playlists, tracks, shows or episodes that match a keyword string.
   *
   * @param {spotifySearchConfig} config
   * @returns
   * @memberof SpotifyApiService
   */
  public search(config: spotifySearchConfig) {
    return this.http.get(this.config.apiUrl + this.config.endpoint.search + this.getSearchQueries(config), { headers: this.headers })
  }
  /**
   *
   *
   * @private
   * @param {*} queries
   * @returns {string}
   * @memberof SpotifyApiService
   */
  private getSearchQueries(queries: any): string {
    if (typeof queries === 'undefined')
      return "";
    let query = Object.keys(queries).map((query: string) => {
      return query + "=" + queries[query];
    });
    return (query.length > 0) ? "?" + query.join("&") : "";
  }

  /**
   * Get Spotify catalog information for a single album. 
   *
   * @param {string} albumId
   * @returns {Observable<any>}
   * @memberof SpotifyApiService
   */
  public fetchAlbum(albumId: string | null): Observable<any> {
    return this.http.get(this.config.apiUrl + this.config.endpoint.albums + "/" + albumId, { headers: this.headers });
  }
  public fetchTrack(trackId: string | null): Observable<any> {
    return this.http.get(this.config.apiUrl + this.config.endpoint.tracks + "/" + trackId, { headers: this.headers });
  }
  public fetchArtist(artistId: string | null): Observable<any> {
    return this.http.get(this.config.apiUrl + this.config.endpoint.artists + "/" + artistId, { headers: this.headers });
  }
  public fetchArtistTopTracks(artistId: string | null, queries?: any): Observable<any> {
    queries = this.getSearchQueries(queries);
    return this.http.get(this.config.apiUrl + this.config.endpoint.artists + "/" + artistId + "/top-tracks" + queries, { headers: this.headers });
  }
  public fetchArtistAlbums(artistId: string | null, queries?: any): Observable<any> {
    queries = this.getSearchQueries(queries);
    return this.http.get(this.config.apiUrl + this.config.endpoint.artists + "/" + artistId + "/albums" + queries, { headers: this.headers });
  }
  public fetchArtistRelated(artistId: string | null, queries?: any): Observable<any> {
    return this.http.get(this.config.apiUrl + this.config.endpoint.artists + "/" + artistId + "/related-artists" + this.getSearchQueries(queries), { headers: this.headers });
  }
}
