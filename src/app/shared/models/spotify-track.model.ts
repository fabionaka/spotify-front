import { Artist, ExternalIds, ExternalUrls, SpotifyTrackInterface } from "../interfaces/spotify-interfaces";
import { SpotifyAlbum } from "./spotify-album.model";

export class SpotifyTrack implements SpotifyTrackInterface {
    constructor(
        public album?: SpotifyAlbum | undefined,
        public artists?: Artist[] | undefined,
        public available_markets?: string[] | undefined,
        public disc_number?: number | undefined,
        public duration_ms?: number | undefined,
        public explicit?: boolean | undefined,
        public external_ids?: ExternalIds | undefined,
        public external_urls?: ExternalUrls | undefined,
        public href?: string | undefined,
        public id?: string | undefined,
        public is_local?: boolean | undefined,
        public name?: string | undefined,
        public popularity?: number | undefined,
        public preview_url?: string | undefined,
        public track_number?: number | undefined,
        public type?: string | undefined,
        public uri?: string | undefined, 
    ) { }

}