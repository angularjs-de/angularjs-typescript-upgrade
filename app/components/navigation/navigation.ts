import * as angular from 'angular'

const moduleName = 'myApp.navigation'
export default moduleName

class Navigation {
  constructor (
    private $location: angular.ILocationService
  ) {}
  
  private isActive (route: string): boolean {
    const routeExp = new RegExp(route)
    return routeExp.test(this.$location.path())
  }
}

angular.module(moduleName, [])
  .component('navigation', {
    templateUrl: 'app/components/navigation/navigation.html',
    controller: Navigation
  })
