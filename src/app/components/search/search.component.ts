import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { spotifySearchConfig, spotifySearchResponse, spotifySearchType } from 'src/app/shared/interfaces/spotify-interfaces';
import { SpotifySearchResponseItem } from 'src/app/shared/models/spotify-models.model';
import { SpotifyApiService } from 'src/app/shared/services/spotify-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  constructor(
    private spotifyApiService: SpotifyApiService
  ) { }

  ngOnInit(): void {
  }

  public searchQuery: string = "";
  public searchType: spotifySearchType[] = ["artist"]
  public resources?: SpotifySearchResponseItem[] | undefined = [];

  search(): void {
    if (this.searchQuery.length > 3 && this.searchType.length > 0) {
      let searchConfig: spotifySearchConfig = {
        q: this.searchQuery,
        type: this.searchType
      }
      this.spotifyApiService.search(searchConfig).pipe(map(t => {
        return Object.values(t);
      })).subscribe(r => { this.resources = r; })
    }
  }
}
