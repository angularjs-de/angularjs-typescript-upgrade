import * as angular from 'angular'
import 'angular-route'

import {upgradeAdapter} from './upgrade_adapter';

import routes from './routes'

import navigation from './components/navigation/navigation'
import booksIndex from './components/books-index/books-index'
import booksShow from './components/books-show/books-show'


angular.module('myApp', [
  'ngRoute',
  routes,
  navigation,
  booksIndex,
  booksShow
])

upgradeAdapter.bootstrap(document.body, ['myApp']);