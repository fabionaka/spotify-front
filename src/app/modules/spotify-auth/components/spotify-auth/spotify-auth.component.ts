import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-spotify-auth',
  templateUrl: './spotify-auth.component.html',
  styleUrls: ['./spotify-auth.component.less']
})
export class SpotifyAuthComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!!this.tokenService.hasTokens)
      this.router.navigate(['album','0QVoYzGd1p8Z3ohEaM0lsc']);
  }

}
