import * as angular from 'angular'

import booksApiModule, {BooksApi, IBook} from '../../services/books-api/books-api'

interface IRouteParams extends angular.route.IRouteParamsService {
  isbn: string
}

class BooksShow {

  book: IBook

  constructor (
    booksApi: BooksApi,
    $routeParams: IRouteParams
  ) {
    booksApi.getByIsbn($routeParams.isbn)
      .then(book => this.book = book)
  }
}

const moduleName = 'myApp.books-show'
export default moduleName

angular.module(moduleName, [booksApiModule])
  .component('booksShow', {
    templateUrl: 'app/components/books-show/books-show.html',
    controller: BooksShow
  })
