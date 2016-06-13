import * as angular from 'angular'
import 'angular-route'

import {upgradeAdapter} from './upgrade_adapter';

import routes from './routes'

import {NavigationComponent} from './components/navigation/navigation'
import booksIndex from './components/books-index/books-index'
import booksShow from './components/books-show/books-show'


angular.module('myApp', [
  'ngRoute',
  routes,
  booksIndex,
  booksShow
])
.directive('navigation', upgradeAdapter.downgradeNg2Component(NavigationComponent);

upgradeAdapter.upgradeNg1Provider('$location');
upgradeAdapter
    .bootstrap(document.body, ['myApp']);
