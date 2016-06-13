import {Component, Inject} from '@angular/core';
import {upgradeAdapter} from '../../upgrade_adapter';

@Component({
  selector: 'navigation',
  templateUrl: 'app/components/navigation/navigation.html'
})
export class NavigationComponent {
  constructor(@Inject('$location') private $location) {
  }

  private isActive (route: string): boolean {
    const routeExp = new RegExp(route);
    return routeExp.test(this.$location.path())
  }
}
