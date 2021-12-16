import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifySearchResponseItem } from 'src/app/shared/models/spotify-models';

@Component({
  selector: 'spotify-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.less']
})
export class SearchResultsComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }
  @Input() list?: SpotifySearchResponseItem | undefined;

  ngOnInit(): void {
  }

  componentTitle(): string {
    if (typeof this.list === 'undefined' || typeof this.list.items === 'undefined')
      return "Não Definido";
    return this.list.items[0].type;
  }


  open(item: any): void {
    console.log(item.type);
  }

}
