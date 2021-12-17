import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from 'src/app/app.module';
import { TokenService } from '../../services/token.service';
import { SpotifyAuthModule } from '../../spotify-auth.module';

import { SpotifyAuthComponent } from './spotify-auth.component';

describe('SpotifyAuthComponent', () => {
  let component: SpotifyAuthComponent;
  let fixture: ComponentFixture<SpotifyAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule.withRoutes([])],
      declarations: [SpotifyAuthComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  beforeEach(() => {
    let tokenService = TestBed.inject(TokenService);
    tokenService.setToken({
      access_token: "TW9ja1Rva2VuSWRGb3JUZXN0aW5nUHVycG9zZQ",
      token_type: '',
      expires_in: 0,
      state: ''
    })
  });
  it('should verify access token', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });
});
