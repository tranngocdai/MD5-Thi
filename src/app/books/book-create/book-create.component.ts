import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../../sevices/book-service.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  successMessage: string;
  failMessage: string;

  constructor(private blogService: BookServiceService) { }

  ngOnInit(): void {
  }

  addBook(bookForm) {
    this.blogService.createBook(bookForm.value).subscribe(() => {
      this.successMessage = 'Tạo mới thành Công';
    }, () => {
      this.failMessage = 'Tạo mới thất bại';
    });
  }

}
