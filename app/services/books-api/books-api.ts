import {Inject, Injectable} from '@angular/core';
import {upgradeAdapter} from '../../upgrade_adapter';

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
  private $http;

  private baseUrl: string = 'http://bookmonkey-api.angularjs.de/books'

  constructor(
    @Inject('$http') http
  ) {
    this.$http = http;
  }

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

upgradeAdapter.addProvider(BooksApi);

const moduleName = 'myApp.books-service'
export default moduleName

angular.module(moduleName, [])
  .factory('booksApi', upgradeAdapter.downgradeNg2Provider(BooksApi));
