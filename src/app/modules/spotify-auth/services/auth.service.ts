import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthConfig } from '../interfaces/auth-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authConfig: AuthConfig = {
    client_id: '33f3958461ec40af8e8031ccd8a7c40c',
    response_type: "token",
    redirect_uri: 'http://localhost:4200/auth',
    state: '',
    show_dialog: false,
    scope: ["user-read-email", "user-read-private"]
  }
  private initFalse: boolean = false;
  private _authorized: BehaviorSubject<boolean> = new BehaviorSubject(this.initFalse);

  private buildAuthUrl(): string {

    let params = [];
    for (const [key, value] of Object.entries(this.authConfig)) {
      if (typeof (value) == 'object') {
        params.push(`${key}=${(value as string[]).join(" ")}`);
      } else {
        params.push(`${key}=${value}`);
      }
    }

    return `https://accounts.spotify.com/authorize?${params.join('&')}`;
  }

  public authorize() {
    window.location.href = this.buildAuthUrl();
  }
  public authorized(): void {
    this._authorized.next(true);
  }
}
