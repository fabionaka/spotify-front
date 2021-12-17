import { AlbumInterface, Artist, Copyright, ExternalIds, ExternalUrls, Image, Tracks } from "../interfaces/spotify-interfaces";

export class SpotifyAlbum implements AlbumInterface {
    constructor(
        public album_type?: string,
        public artists?: Artist[],
        public available_markets?: string[],
        public copyrights?: Copyright[],
        public external_ids?: ExternalIds,
        public external_urls?: ExternalUrls,
        public genres?: any[],
        public href?: string,
        public id?: string,
        public images?: Image[],
        public label?: string,
        public name?: string,
        public popularity?: number,
        public release_date?: string,
        public release_date_precision?: string,
        public total_tracks?: number,
        public tracks?: Tracks,
        public type?: string,
        public uri?: string,
    ){}
}