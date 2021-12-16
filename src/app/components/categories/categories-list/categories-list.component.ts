import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/modules/spotify-auth/services/token.service';
import { SpotifyCategory } from 'src/app/shared/interfaces/spotify-interfaces';
import { SpotifyApiService } from 'src/app/shared/services/spotify-api.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.less']
})
export class CategoriesListComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private spotifyApiService: SpotifyApiService,
    private router: Router,
  ) { }
  public categories: any;
  public pagination: any;

  ngOnInit(): void {
    this.spotifyApiService.fetchCategories().subscribe((c: any) => {
      this.categories = c.categories.items;

    })
  }
  goTo(category: SpotifyCategory): void {
    this.router.navigate(["categories", category.id])
  }

}
