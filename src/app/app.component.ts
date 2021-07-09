import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction, DeleteItemAction, LoadShoppingAction } from './store/actions/shopping-actions';
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
  loading$: Observable<Boolean>
  shoppingItems$ : Observable<Array<ShoppingItem>>;
  error$: Observable<Error>

  //Here, by specifying "AppState", we inform the store framework that how does our store look.
  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.loading$ = this.store.select(store => store.shopping.loading);
    this.shoppingItems$ = this.store.select(store => store.shopping.list);
    this.error$ = this.store.select(store => store.shopping.error);
    this.store.dispatch(new LoadShoppingAction());
  }

  addItem() : void {
    this.newShoppingItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = {id : '', name : ''};
  }

  removeItem(id:string) : void {
    this.store.dispatch(new DeleteItemAction(id));
  }

}
