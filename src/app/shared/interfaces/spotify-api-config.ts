export interface spotifyApiConfig {
    apiUrl: string;
    endpoint: spotifyApiEndpoint
}
export interface spotifyApiEndpoint {
    user: string;
    categories: string;
}