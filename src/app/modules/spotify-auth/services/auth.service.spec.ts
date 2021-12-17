import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SpotifyAuthModule } from '../spotify-auth.module';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SpotifyAuthModule, RouterTestingModule.withRoutes([])],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  beforeEach(() => {
    spyOn(service, 'authorize').and.callFake(() => {
      return ;
    })
  })
  it('should authorize', () => {
    expect(service.authorize()).toBeUndefined();
  });

  it('should be authorized', () => {
    expect(service.authorized()).toBeUndefined();
  });
});
