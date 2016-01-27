import * as angular from 'angular'

import booksApiModule, {IBook, IBooksApi} from '../../services/books-api/books-api'

class BooksIndex {
  
  books: IBook[]
  
  constructor (
    booksApi: IBooksApi
  ) {
    booksApi.all()
      .then(books => this.books = books)
  }
}

const moduleName = 'myApp.books-index'
export default moduleName

angular.module(moduleName, [booksApiModule])
  .component('booksIndex', {
    templateUrl: 'app/components/books-index/books-index.html',
    controller: BooksIndex,
    controllerAs: 'booksIndex'
  })
