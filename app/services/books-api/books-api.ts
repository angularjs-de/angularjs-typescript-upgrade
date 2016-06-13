import {Inject, Injectable} from '@angular/core';
import {upgradeAdapter} from '../../upgrade_adapter';

// upgrade a1 $http provider to be injectable in a2
upgradeAdapter.upgradeNg1Provider('$http');

export interface IBook {
  title: string
  subtitle: string
  isbn: string
  abstract: string
  numPages: number
  author: string
  publisher: {
    name: string
    url: string
  }
  tags: string[]
}

export interface IBooksApi {
  all(): Promise<IBook[]>
  getByIsbn(isbn: string): Promise<IBook>
}

@Injectable()
export class BooksApi implements IBooksApi {
  private baseUrl: string = 'http://bookmonkey-api.angularjs.de/books'

  // inject a1 $http service
  constructor(
    @Inject('$http') private $http
  ) {}

  public all() {
    return this.$http
      .get(this.baseUrl)
      .then(res => res.data);
  }

  public getByIsbn(isbn: string) {
    return this.$http
      .get(`${this.baseUrl}/${isbn}`)
      .then(res => res.data);
  }
}

const moduleName = 'myApp.books-service'
export default moduleName

// add BookApi class to downgradable providers
upgradeAdapter.addProvider(BooksApi);

angular.module(moduleName, [])
  // downgrade a2 service to a1 service
  .service('booksApi', upgradeAdapter.downgradeNg2Provider(BooksApi));
