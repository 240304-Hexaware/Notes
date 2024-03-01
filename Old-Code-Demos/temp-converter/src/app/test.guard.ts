import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const testGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot) => {
    //your logic here
    //with no logic here, we are just always allowing this route
    console.log("Test Route Guard activated!")
  return true;
};
