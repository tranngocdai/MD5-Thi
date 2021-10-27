import { Component, OnInit } from '@angular/core';
import {Book} from '../../book';
import {Subscription} from 'rxjs';
import {BookServiceService} from '../../sevices/book-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  book: Book;
  subcription: Subscription;
  message: string;
  constructor(private bookService: BookServiceService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subcription = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.bookService.detailBook(id).subscribe(next => {
        this.book = next;
      }, error => {
        this.message = 'can not retrieve customer detail. ' + error;
      });
    });
  }

  deleteBook() {
    console.log(this.book.id);
    this.bookService.deleteBook(this.book.id).subscribe(next => {
      this.message = 'Đã xóa sách';
    }, error => {
      this.message = 'Xóa Không Thành Công';
    });
  }


}
