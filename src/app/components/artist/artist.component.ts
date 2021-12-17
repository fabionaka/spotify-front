import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { SpotifyArtist } from 'src/app/shared/models/spotify-artist.model';
import { SpotifyApiService } from 'src/app/shared/services/spotify-api.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.less']
})
export class ArtistComponent implements OnInit {

  constructor(
    private spotifyApiService: SpotifyApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  public resource: SpotifyArtist | undefined
  public resourceTracks: any | undefined
  public resourceAlbums: any | undefined
  public resourceRelatedArtists: any | undefined

  ngOnInit(): void {
    let artistId = this.route.snapshot.paramMap.get('artistId');
    this.spotifyApiService.fetchArtist(artistId).pipe(map(response => { return Object.assign(new SpotifyArtist, response) })).subscribe(artist => {
      this.resource = artist;
      this.fetchTracks();
      this.fetchAlbums();
    })
  }

  fetchTracks(): void {
    if (typeof this.resource === 'undefined' || typeof this.resource?.id === 'undefined')
      return;
    this.spotifyApiService.fetchArtistTopTracks(this.resource?.id, { market: 'BR' }).subscribe(tracks => {
      this.resourceTracks = tracks;
    })
  }

  fetchAlbums(): void {
    if (typeof this.resource === 'undefined' || typeof this.resource?.id === 'undefined')
      return;
    this.spotifyApiService.fetchArtistAlbums(this.resource?.id, { market: 'BR' }).subscribe(albums => {
      this.resourceAlbums = albums;
    })
  }
  open(item: any): Promise<boolean> {
    return this.router.navigate([item.type, item.id])
  }

}
