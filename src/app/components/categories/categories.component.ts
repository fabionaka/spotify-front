import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/modules/spotify-auth/services/token.service';
import { SpotifyApiService } from 'src/app/shared/services/spotify-api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private spotifyApiService: SpotifyApiService,
  ) { }

  ngOnInit(): void {
    this.spotifyApiService.fetchCategories()
  }

}
