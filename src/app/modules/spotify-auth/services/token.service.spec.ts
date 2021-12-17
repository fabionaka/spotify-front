import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { SpotifyAuthResponse } from '../interfaces/spotify-auth-response';
import { SpotifyAuthModule } from '../spotify-auth.module';

import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SpotifyAuthModule, RouterTestingModule.withRoutes([])],
    });
    service = TestBed.inject(TokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('hasTokens should be Observable', () => {
    expect(service.hasTokens).toBeInstanceOf(Observable)
  })

  it('should set a token', () => {
    let responseTest: SpotifyAuthResponse = {
      access_token: 'TW9ja1Rva2VuSWRGb3JUZXN0aW5nUHVycG9zZQ',
      token_type: '',
      expires_in: 0,
      state: undefined
    }
    expect(service.setToken(responseTest)).toBeTrue()
  })
  it('shouldn\'t set a token', () => {
    let responseTest: SpotifyAuthResponse = {
      access_token: '',
      token_type: '',
      expires_in: 0,
      state: undefined
    }
    expect(service.setToken(responseTest)).toBeFalse()
  })
});
