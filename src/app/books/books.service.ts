import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  getBooks(){
    return [
      {
        name: "The Book of Geek",
        author: "Brian Briggs ",
        url: 'https://m.media-amazon.com/images/P/B006ITP0EI.01._SCLZZZZZZZ_SX500_.jpg',
        price: 400
      },
      {
        name: "gorilla drawing bbook",
        author: "Mr bhim karmakar ",
        url: 'https://m.media-amazon.com/images/P/B09R36NH5G.01._SCLZZZZZZZ_SX500_.jpg',
        price: 100
      },
      {
        name: "The Secrets to Deliverance",
        author: "Alexander Pagani ",
        url: 'https://m.media-amazon.com/images/P/1629995134.01._SCLZZZZZZZ_SX500_.jpg',
        price: 500
      },

        {
          name: "The Wisdom of the Bullfrog",
          author: " Admiral William H. McRaven ",
          url: 'https://m.media-amazon.com/images/P/1538707942.01._SCLZZZZZZZ_SX500_.jpg',
          price: 900
        }

    ]
  }
}
