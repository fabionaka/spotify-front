import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SpotifyAuthResponse } from '../interfaces/spotify-auth-response';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  private token: string = "";
  private _token: BehaviorSubject<string> = new BehaviorSubject(this.token);

  public setToken(response: SpotifyAuthResponse): boolean {
    this.token = (!!response && !!response.access_token) ? response.access_token : "";
    localStorage.setItem('token', this.token);
    this._token.next(this.token);
    return !!this.token;
  }

  public get hasTokens(): Observable<string> {
    return this._token.asObservable();
  }
}
