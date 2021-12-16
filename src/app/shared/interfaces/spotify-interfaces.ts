import { SpotifySearchResponseItem } from "../models/spotify-models";
 
export interface ExplicitContent {
    filter_enabled: boolean;
    filter_locked: boolean;
}
export interface ExternalUrls {
    spotify: string;
}
export interface Followers {
    href?: any;
    total: number;
}
export interface Image {
    height?: any;
    url: string;
    width?: any;
}
export interface SpotifyUserInterface {
    country?: string;
    display_name?: string;
    email?: string;
    explicit_content?: ExplicitContent;
    external_urls?: ExternalUrls;
    followers?: Followers;
    href?: string;
    id?: string;
    images?: Image[];
    product?: string;
    type?: string;
    uri?: string;
}


export interface SpotifyCategory {
    href: string;
    icons: Image[];
    id: string;
    name: string;
}
export type spotifySearchType = "album" |
    "artist" |
    "playlist" |
    "track" |
    "show" |
    "episode";
/**
 *
 * @see https://developer.spotify.com/documentation/web-api/reference/#/operations/search
 * @export
 * @interface spotifySearchConfig
 */
export interface spotifySearchConfig {
    /**
     * Your search query.
     * You can narrow down your search using field filters. The available filters are album, artist, track, year, upc, tag:hipster, tag:new, isrc, and genre. Each field filter only applies to certain result types.
     *
     * @example "remaster%20track:Doxy+artist:Miles%20Davis"
     * @type {string}
     * @memberof spotifySearchConfig
     */
    q: string;
    /**
     *
     *
     * @type {spotifySearchType[]}
     * @memberof spotifySearchConfig
     */
    type: spotifySearchType[];
    /**
     * If include_external=audio is specified then the response will include any relevant audio content that is hosted externally. By default external content is filtered out from responses.
     *
     * @type {("audio" | undefined)}
     * @memberof spotifySearchConfig
     */
    include_external?: "audio" | undefined;
    /**
     * The maximum number of results to return in each item type.
     * @default 20
     * @type {number}
     * @memberof spotifySearchConfig
     */
    limit?: number;
    /**
     * An ISO 3166-1 alpha-2 country code
     * 
     * @example "BR"
     * @type {(string | undefined)}
     * @memberof spotifySearchConfig
     */
    market?: string | undefined;
    /**
     * The index of the first result to return. Use with limit to get the next page of search results.
     * @default 0
     * @type {number}
     * @memberof spotifySearchConfig
     */
    offset?: number;
}
export interface spotifySearchResponse {
    tracks?: SpotifySearchResponseItem;
    artists?: SpotifySearchResponseItem;
    albums?: SpotifySearchResponseItem;
    playlists?: SpotifySearchResponseItem;
    shows?: SpotifySearchResponseItem;
    episodes?: SpotifySearchResponseItem;
}
export interface SpotifySearchResponseItemInterface {
    href?: string;
    next?: string | null;
    previous?: string | null;
    items?: any[];
    limit?: number;
    offset?: number;
    total?: number;
}