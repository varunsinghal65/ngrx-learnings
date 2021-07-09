import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import { ShoppingItem } from './store/models/shopping-item.model';

@Injectable()
export class ShoppingService {

  private readonly SHOPPING_URL: string = "http://localhost:3000/shopping";

  constructor(private http: HttpClient) {}

  getShoppingItems() {
    //delay of 500 ms is added in the emissions of values to mock a realistic server response time.
    return this.http.get(this.SHOPPING_URL).pipe(delay(500));
  }

  addShoppingItem(shoppingItem: ShoppingItem) {
    return this.http.post(this.SHOPPING_URL, shoppingItem).pipe(delay(500));
  }

  removeShoppingItem(id:string) {
    return this.http.delete(`${this.SHOPPING_URL}/${id}`).pipe(delay(500));
  }
}
