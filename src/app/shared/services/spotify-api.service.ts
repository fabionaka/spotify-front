import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { spotifyApiConfig } from '../interfaces/spotify-api-config';
import { TokenService } from 'src/app/modules/spotify-auth/services/token.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { SpotifyUser } from '../models/spotify-models';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {

  config: spotifyApiConfig = {
    apiUrl: "https://api.spotify.com/v1",
    endpoint: { user: "/me", categories: "/browse/categories", }
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
  public fetchUser() {
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
  public fetchCategories() {

  }
}
