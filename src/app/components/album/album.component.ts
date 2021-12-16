import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyApiService } from 'src/app/shared/services/spotify-api.service';
import { SpotifyAlbum } from 'src/app/shared/models/spotify-album'
import { map } from 'rxjs';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.less']
})
export class AlbumComponent implements OnInit {

  constructor(
    private spotifyApiService: SpotifyApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  public resource: SpotifyAlbum | undefined

  ngOnInit(): void {
    let albumId = this.route.snapshot.paramMap.get('albumId');
    this.spotifyApiService.fetchAlbum(albumId).pipe(map(album => { return Object.assign(new SpotifyAlbum, album) })).subscribe((album: SpotifyAlbum) => {
      this.resource = album;
    })
  }
  /**
   * Navigate to a item type
   *
   * @param {*} item
   * @returns {Promise<boolean>}
   * @memberof AlbumComponent
   */
  open(item: any): Promise<boolean> {
    return this.router.navigate([item.type, item.id])
  }


}
