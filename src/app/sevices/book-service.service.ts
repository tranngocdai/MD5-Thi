import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../book';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private readonly API_URL = 'http://localhost:3000/books';

  constructor(private  httpClient: HttpClient) { }

  public getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.API_URL);
  }

  public createBook(book: Partial<Book>): Observable<Book> {
    return this.httpClient.post<Book>('http://localhost:3000/books', book);
  }

  public editBook(book: Book, id: number): Observable<Book> {
    return this.httpClient.put<Book>(`http://localhost:3000/books/${id}`, book);
  }

  public deleteBook(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(`http://localhost:3000/books/${id}`);
  }

  public detailBook(id: string): Observable<Book> {
    return this.httpClient.get<Book>(`http://localhost:3000/books/${id}`);
  }
}
