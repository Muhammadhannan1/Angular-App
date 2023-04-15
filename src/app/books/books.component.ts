import { Component, OnInit } from '@angular/core';
import { BookDetails } from '../types/Book';
import { BooksService } from './books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  constructor(private booksService: BooksService) {
  }
/*name: string = "gorilla drawing bbook";
author: string = "Mr bhim karmakar ";
url : string = 'https://m.media-amazon.com/images/P/B09R36NH5G.01._SCLZZZZZZZ_SX500_.jpg';
price:number =100;

name2: string ="The Book of Geek";
author2: string = "Brian Briggs ";
url2 : string = 'https://m.media-amazon.com/images/P/B006ITP0EI.01._SCLZZZZZZZ_SX500_.jpg';
price2: number = 400;*/

ngOnInit(): void {
  this.BookDetails = this.booksService.getBooks();
}

isShowing: boolean =true;
myName: string = "";

cart:BookDetails[]=[];

addToCart(book:BookDetails){
  console.log(book);
}

BookDetails : BookDetails []=[];
}
