import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SpotifyAuthModule } from '../spotify-auth.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

describe('Auth', () => {

  let router: Router;
  let guard: AuthGuard;
  let route: ActivatedRoute;
  let localStore: any = {};
  const mock = <T, P extends keyof T>(obj: Pick<T, P>): T => obj as T;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SpotifyAuthModule, RouterTestingModule.withRoutes([])],
    }).compileComponents();
    guard = TestBed.inject(AuthGuard);


  });

  it('should create an instance', () => {
    expect(guard).toBeTruthy();
  });
  beforeEach(() => {
    router = TestBed.inject(Router)
    route = TestBed.inject(ActivatedRoute)
  });
  it('can activate child', () => {
    route.snapshot.fragment = 'access_token=TW9ja1Rva2VuSWRGb3JUZXN0aW5nUHVycG9zZQ&token_type=bearer&expires_in=3600&state=';
    expect(guard.canActivateChild(route.snapshot, router.routerState.snapshot)).toBeTrue();
    route.snapshot.fragment = '';
  });

  it('can activate child (localstorage)', () => {

    localStore.token = "TW9ja1Rva2VuSWRGb3JUZXN0aW5nUHVycG9zZQ";

    spyOn(window.localStorage, 'getItem').and.callFake((key) =>
      key in localStore ? localStore[key] : null
    );
    spyOn(window.localStorage, 'setItem').and.callFake(
      (key, value) => (localStore[key] = value + '')
    );
    spyOn(window.localStorage, 'clear').and.callFake(() => (localStore = {}));
    expect(guard.canActivateChild(route.snapshot, router.routerState.snapshot)).toBeTrue();
  });

  it('can`t activate child', () => {
    localStore.token = null;
    route.snapshot.fragment = '';
    spyOn(window.localStorage, 'getItem').and.callFake((key) =>
      key in localStore ? localStore[key] : null
    );
    expect(guard.canActivateChild(route.snapshot, router.routerState.snapshot)).toBeFalse();
  });

  it('can activate', () => {
    route.snapshot.fragment = 'access_token=TW9ja1Rva2VuSWRGb3JUZXN0aW5nUHVycG9zZQ&token_type=bearer&expires_in=3600&state=';
    expect(guard.canActivate(route.snapshot, router.routerState.snapshot)).toBeTrue();
  });
  it('can`t activate', () => {
    route.snapshot.fragment = '';
    localStore.token = null;
    spyOn(window.localStorage, 'getItem').and.callFake((key) =>
      key in localStore ? localStore[key] : null
    );
    expect(guard.canActivate(route.snapshot, router.routerState.snapshot)).toBeFalse();
  });
});
