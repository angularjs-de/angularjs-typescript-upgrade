// angular-mocks returns the mocked angular object
import * as angular from 'angular-mocks'

// the module we want to test
import moduleName, {IBooksApi} from './books-api'

describe('A bookApi', function () {
  beforeEach(angular.mock.module(moduleName))

  let booksApi: IBooksApi
  let $httpBackend: angular.IHttpBackendService
  beforeEach(angular.mock.inject(
    (_booksApi_, _$httpBackend_) => {
      booksApi = _booksApi_
      $httpBackend = _$httpBackend_
    }
  ))

  afterEach(() => {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
  })

  // we only need to test the functionality of our service.
  // the returned values are checked by TypeScript

  describe('all()', () => {
    it('should make an HTTP GET request', () => {
      $httpBackend.expectGET('http://ajs-workshop.herokuapp.com/api/books')
        .respond([{title: 'Book'}])

      booksApi.all()
      $httpBackend.flush()
    })
  })

  describe('getByIsbn(isbn)', () => {
    it('should make an HTTP GET request with the ISBN', () => {
      $httpBackend.expectGET('http://ajs-workshop.herokuapp.com/api/books/1234')
        .respond({title: 'Book'})

      booksApi.getByIsbn('1234')
      $httpBackend.flush()
    })
  })
})
