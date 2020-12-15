import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LayoutAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    return this.checkMaintenance(state.url);
  }

  checkMaintenance(url: string): Promise<boolean> | boolean {
    const underMaintenance = JSON.parse(sessionStorage.getItem('maintenanceMode'));
    if (underMaintenance === true) {
      if (url === '/underdeveloping') {
        return true;
      } else {
        // Navigate to the underdeveloping page with extras
        this.router.navigate(['/underdeveloping']);
        return false;
      }
      // Navigate to the underdeveloping page with extras

      return true;
    } else {
      return true;
    }
  }
}
