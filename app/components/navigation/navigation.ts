import {Component, Inject} from '@angular/core';
import {upgradeAdapter} from '../../upgrade_adapter';

// upgrade a1 $location service
upgradeAdapter.upgradeNg1Provider('$location');

@Component({
  selector: 'navigation',
  templateUrl: 'app/components/navigation/navigation.html'
})
export class NavigationComponent {
  private $location;

  constructor(@Inject('$location') $location) {
    this.$location = $location;
  }

  private isActive (route: string): boolean {
    const routeExp = new RegExp(route)
    return routeExp.test(this.$location.path())
  }
}
