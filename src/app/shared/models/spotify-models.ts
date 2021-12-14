import { ExplicitContent, ExternalUrls, Followers, Image, SpotifyUserInterface } from "../interfaces/spotify-interfaces";

export class SpotifyUser implements SpotifyUserInterface {
    constructor(
        public country?: string,
        public display_name?: string,
        public email?: string,
        public explicit_content?: ExplicitContent,
        public external_urls?: ExternalUrls,
        public followers?: Followers,
        public href?: string,
        public id?: string,
        public images?: Image[],
        public product?: string,
        public type?: string,
        public uri?: string,
    ) { }
}