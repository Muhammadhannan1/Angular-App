import { Component } from '@angular/core';


interface BookDetails {
  name:string,
  author:string,
  url:string,
} ;
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
name: string = "gorilla drawing bbook";
author: string = "Mr bhim karmakar ";
url : string = 'https://m.media-amazon.com/images/P/B09R36NH5G.01._SCLZZZZZZZ_SX500_.jpg';

name2: string ="The BBook of Geek";
author2: string = "Brian Briggs ";
url2 : string = 'https://m.media-amazon.com/images/P/B006ITP0EI.01._SCLZZZZZZZ_SX500_.jpg';

isShowing: boolean =false;
myName: string = "";



newBookDetails : BookDetails []=[
  {
    name: "The Secrets to Deliverance",
    author: "Alexander Pagani ",
    url: 'https://m.media-amazon.com/images/P/1629995134.01._SCLZZZZZZZ_SX500_.jpg'
  },

    {
      name: "The Wisdom of the Bullfrog",
      author: " Admiral William H. McRaven ",
      url: 'https://m.media-amazon.com/images/P/1538707942.01._SCLZZZZZZZ_SX500_.jpg'
    }

]
}
