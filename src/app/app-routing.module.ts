import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BookCreateComponent} from './books/book-create/book-create.component';
import {BookListComponent} from './books/book-list/book-list.component';
import {BookEditComponent} from './books/book-edit/book-edit.component';
import {BookDeleteComponent} from './books/book-delete/book-delete.component';
import {BookDetailComponent} from './books/book-detail/book-detail.component';

const routes: Routes = [{
  path: 'list-book',
  component: BookListComponent
}, {
  path: 'create-book',
  component: BookCreateComponent
}, {
  path: 'list-book/edit-book/:id',
  component: BookEditComponent
}, {
  path: 'list-book/delete-book/:id',
  component: BookDeleteComponent
}, {
  path: 'list-book/detail-book/:id',
  component: BookDetailComponent
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
