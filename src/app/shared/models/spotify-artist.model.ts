import { ExternalUrls, Followers, Image, SpotifyArtistInterface } from "../interfaces/spotify-interfaces";

export class SpotifyArtist implements SpotifyArtistInterface {
    constructor(
        public external_urls?: ExternalUrls,
        public followers?: Followers,
        public genres?: string[],
        public href?: string,
        public id?: string,
        public images?: Image[],
        public name?: string,
        public popularity?: number,
        public type?: string,
        public uri?: string,
    ) { }

}