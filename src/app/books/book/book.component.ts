import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookDetails } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
@Input() book: BookDetails ={} as BookDetails;
@Output() bookEmitter = new EventEmitter<BookDetails>();

addToCart(){
this.bookEmitter.emit(this.book);
}
}
