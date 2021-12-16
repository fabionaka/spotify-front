import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { SpotifyTrack } from 'src/app/shared/models/spotify-track';
import { SpotifyApiService } from 'src/app/shared/services/spotify-api.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.less']
})
export class TrackComponent implements OnInit {

  constructor(
    private spotifyApiService: SpotifyApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  public resource: SpotifyTrack | undefined

  ngOnInit(): void {
    let albumId = this.route.snapshot.paramMap.get('trackId');
    this.spotifyApiService.fetchTrack(albumId).pipe(map(track => { return Object.assign(new SpotifyTrack, track) })).subscribe((album: SpotifyTrack) => {
      this.resource = album;
    })
  }
  open(item: any): Promise<boolean> {
    return this.router.navigate([item.type, item.id]);
  }

}
