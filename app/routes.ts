const moduleName = 'myApp.routes'
export default moduleName

angular.module(moduleName, [])
  .config(($routeProvider: angular.route.IRouteProvider) => {
    $routeProvider
      .when('/', {
        template: `<h1>Hallo {{name}}!</h1><input type="text" ng-model="name">`
      })
      .when('/books', {
        template: '<books-index></books-index>'
      })
      .when('/books/:isbn', {
        template: '<books-show></books-show>'
      })
  })
