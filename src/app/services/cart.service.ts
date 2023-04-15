import { Injectable } from '@angular/core';
import { BookDetails } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:BookDetails[] = [];
  constructor() { }


}
