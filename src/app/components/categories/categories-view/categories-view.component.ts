import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/modules/spotify-auth/services/token.service';
import { SpotifyApiService } from 'src/app/shared/services/spotify-api.service';

@Component({
  selector: 'app-categories-view',
  templateUrl: './categories-view.component.html',
  styleUrls: ['./categories-view.component.less']
})
export class CategoriesViewComponent implements OnInit {

  constructor(
    private spotifyApiService: SpotifyApiService,
    private router: Router,
    protected route: ActivatedRoute,
  ) { }
  resource: any;

  ngOnInit(): void {
    this.spotifyApiService.fetchCategory(this.route.snapshot.paramMap.get('categoryId'))?.subscribe(response => {
      this.resource = response;
    })
  }

  open(item: any): Promise<boolean> {
    return this.router.navigate([item.type, item.id])
  }
}
