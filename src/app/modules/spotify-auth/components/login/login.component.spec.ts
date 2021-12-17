import { ComponentFixture, fakeAsync, inject, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../services/auth.service';
import { SpotifyAuthModule } from '../../spotify-auth.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let localStore: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyAuthModule, RouterTestingModule.withRoutes([])],
      declarations: [LoginComponent],
      //providers: [{ provide: AuthService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // html
  it('should display login message', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('You need to be logged on Spotify.');
  });
  it('should have login button', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button.login')?.tagName).toBe('BUTTON');
  });


  beforeEach(() => {
    let authService = TestBed.inject(AuthService);
    const authorizeSpy = spyOn(authService, 'authorize').and.callFake(() => {
      return 'Called Authorize()';
    })
  })
  it('should call the login ', () => {
    expect(component.login()).toBeUndefined();
  });

  beforeEach(() => {
    localStore = {};
    localStore.token = "TW9ja1Rva2VuSWRGb3JUZXN0aW5nUHVycG9zZQ";

    spyOn(window.localStorage, 'getItem').and.callFake((key) =>
      key in localStore ? localStore[key] : null
    );
    spyOn(window.localStorage, 'setItem').and.callFake(
      (key, value) => (localStore[key] = value + '')
    );
    spyOn(window.localStorage, 'clear').and.callFake(() => (localStore = {}));
    
  });
  it('should test localStorage', () => {
    fixture.detectChanges();
    expect(component.ngOnInit()).toBeUndefined();
    fixture.detectChanges();
  });

});
