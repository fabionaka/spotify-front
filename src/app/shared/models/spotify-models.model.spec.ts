import { SpotifySearchResponseItem, SpotifyUser } from "./spotify-models.model";

describe('SpotifyUser - model', () => {
  it('should create an instance', () => {
    expect(new SpotifyUser()).toBeTruthy();
  });
});

describe('SpotifySearchResponseItem - model', () => {
  it('should create an instance', () => {
    expect(new SpotifySearchResponseItem()).toBeTruthy();
  });
});