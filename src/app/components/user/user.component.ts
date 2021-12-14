import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription, switchMap, throwIfEmpty } from 'rxjs';
import { AuthService } from 'src/app/modules/spotify-auth/services/auth.service';
import { TokenService } from 'src/app/modules/spotify-auth/services/token.service';
import { SpotifyUser } from 'src/app/shared/models/spotify-models';
import { SpotifyApiService } from '../../shared/services/spotify-api.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit, OnDestroy {

  constructor(
    private tokenService: TokenService,
    private spotifyApiService: SpotifyApiService,
  ) {
  }

  public user?: SpotifyUser;

  ngOnDestroy(): void {
  }
  ngOnInit(): void {
    this.spotifyApiService.fetchUser().subscribe((u: SpotifyUser) => {
      this.user = { ...u }
    })
  }


}

