import { Component, OnInit } from '@angular/core';
import {Book} from '../../book';
import {Subscription} from 'rxjs';
import {BookServiceService} from '../../sevices/book-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  sub: Subscription;

  constructor(private bookService: BookServiceService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.bookService.detailBook(id).subscribe(next => {
        this.book = next;
      }, error => {
        console.log(error);
      });
    });
  }

}
