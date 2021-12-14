export interface SpotifyAuthResponse {
    access_token: string | undefined;
    token_type: "Bearer" | string;
    expires_in: number;
    state: string | undefined;
}