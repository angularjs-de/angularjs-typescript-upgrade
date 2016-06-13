import * as angular from 'angular':
import 'angular-route';

import {upgradeAdapter} from './upgrade_adapter';

import routes from './routes';

import {NavigationComponent} from './components/navigation/navigation';
import booksIndex from './components/books-index/books-index';
import booksShow from './components/books-show/books-show';

angular
  .module('myApp', [
    'ngRoute',
    routes,
    booksIndex,
    booksShow
  ])
  // downgrade a2 component to use it in a1
  .directive('navigation', upgradeAdapter.downgradeNg2Component(NavigationComponent));

// register a1 $location service at a2 rootinjector
upgradeAdapter
  .upgradeNg1Provider('$location');

// bootstrap a1 app in a2 context (async)
upgradeAdapter
  .bootstrap(document.body, ['myApp']);
