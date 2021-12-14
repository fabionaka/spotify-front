import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpotifyAuthRoutingModule } from './spotify-auth-routing.module';
import { AuthService } from './services/auth.service';
import { SpotifyAuthComponent } from './components/spotify-auth/spotify-auth.component';
import { AuthGuard } from './services/auth.guard';
import { TokenService } from './services/token.service';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    SpotifyAuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SpotifyAuthRoutingModule
  ],
  providers: [AuthService, AuthGuard, TokenService]
})
export class SpotifyAuthModule {

}
