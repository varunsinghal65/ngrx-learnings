import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction, LoadShoppingAction } from './store/actions/shopping-actions';
import { AppState } from './store/models/app-state';
import { ShoppingItem } from './store/models/shopping-item.model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'ngrx-varun';
  newShoppingItem : ShoppingItem = {id : '', name : ''};
  shoppingItems$ : Observable<Array<ShoppingItem>>;

  //Here, by specifying "AppState", we inform the store framework that how does our store look.
  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping.list);
    this.store.dispatch(new LoadShoppingAction());
  }

  addItem() : void {
  }

  removeItem(id: String) : void {
  }

}
