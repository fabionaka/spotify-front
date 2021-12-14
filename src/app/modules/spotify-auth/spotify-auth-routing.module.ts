import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SpotifyAuthComponent } from './components/spotify-auth/spotify-auth.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [{
  path: 'auth',
  canActivate: [AuthGuard],
  component: SpotifyAuthComponent,
}, {
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpotifyAuthRoutingModule { }
