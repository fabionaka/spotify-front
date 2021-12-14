import { SpotifyScope } from "./spotify-scope";

export interface AuthConfig {
    /**
     * Application ID
     * 
     * @see https://developer.spotify.com/dashboard/applications 
     * @see https://developer.spotify.com/documentation/general/guides/authorization/
     * @type {string}
     * @memberof AuthConfig
     */
    client_id: string;
    /**
     *
     *
     * @type {("token" | string)}
     * @memberof AuthConfig
     */
    response_type: "token" | string;
    /**
     * White-listed addresses to redirect to after authentication success OR failure (e.g. http://mysite.com/callback/)
     *
     * @type {string}
     * @memberof AuthConfig
     */
    redirect_uri: string;
    state: string;
    show_dialog: boolean;
    /**
     *  Spotify auth scopes
     * @see https://developer.spotify.com/documentation/general/guides/authorization/scopes/
     * @type {(SpotifyScope[] | string)}
     * @memberof AuthConfig
     */
    scope: SpotifyScope[] | string;
}