import {Component, Inject, Input} from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: 'app/components/navigation/navigation.html'
})
export class NavigationComponent {

  @Input() title: string;

  // inject a1 $location service in a2 component
  constructor(@Inject('$location') private $location) {}

  private isActive (route: string): boolean {
    const routeExp = new RegExp(route);
    return routeExp.test(this.$location.path());
  }
}
