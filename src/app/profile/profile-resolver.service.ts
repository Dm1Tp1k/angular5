import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Profile, ProfilesService } from '../shared';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProfileResolver implements Resolve<Profile> {
  constructor(
    private profilesService: ProfilesService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.profilesService.get(route.params['username'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));

  }
}
