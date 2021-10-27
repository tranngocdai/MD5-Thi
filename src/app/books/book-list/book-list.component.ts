import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../../sevices/book-service.service';
import {Book} from '../../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private  bookService: BookServiceService) { }

  bookList: Book[];
  quantity: number;

  ngOnInit(): void {
    this.bookService.getAll().subscribe((result) => {
      this.bookList = result;
      this.quantity = this.bookList.length;
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

}
