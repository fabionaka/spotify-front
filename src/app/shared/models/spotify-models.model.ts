import { ExplicitContent, ExternalUrls, Followers, Image, SpotifySearchResponseItemInterface, SpotifyUserInterface } from "../interfaces/spotify-interfaces";

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
export class SpotifySearchResponseItem implements SpotifySearchResponseItemInterface {
    constructor(
        public href?: string,
        public next?: string | null,
        public previous?: string | null,
        public items?: any[],
        public limit?: number,
        public offset?: number,
        public total?: number,
    ) {

    }

}