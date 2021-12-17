import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SpotifyAuthResponse } from "../interfaces/spotify-auth-response";
import { AuthService } from "./auth.service";
import { TokenService } from "./token.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private tokenService: TokenService
    ) { }

    public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (childRoute.fragment) {
            let f: SpotifyAuthResponse;
            let t: any = {};
            // Procurar 1 liner
            // alguma coisa com MAP
            childRoute.fragment?.split("&").forEach((attr) => {
                let label: string = attr.split("=")[0];
                t[label] = attr.split("=")[1];
            })
            f = { ...t };
            this.tokenService.setToken(f);

            return !!f;
        }
        if (!!localStorage.getItem('token') && typeof localStorage.getItem('token') === 'string') {

            let response: SpotifyAuthResponse = {
                access_token: (localStorage.getItem('token') === null) ? "" : localStorage.getItem('token')?.toString(),
                token_type: "",
                expires_in: 0,
                state: undefined
            }
            this.tokenService.setToken(response);
            return !!localStorage.getItem('token');
        }

        return false;
    }
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivateChild(route, state);
    }
}
