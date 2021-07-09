import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction } from './store/actions/shopping-actions';
import { AppState } from './store/models/app-state';
import { ShoppingItem } from './store/models/shopping-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'ngrx-varun';
  shoppingItems$ : Observable<Array<ShoppingItem>>;

  //Here, by specifying "AppState", we inform the store framework that how does our store look.
  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store=> store.shopping);
    //every 2 seconds, we dispatch the add action.
    //When we dispatch the action, ShoppingReducer is called by the store framework.
    //How did the store know that this reducer is to be called ?
    //In the input params of reducer, we specified the type of "action" as "Shopping Action"
    //So all actions of type "Shopping Action" are now mapped to the reducer.
    //Then finally the switch in the reducer recues the state and returns a new state.
    setInterval(() => this.addItem(), 2000);
  }

  addItem() : void {
    //dispatch method is used to send actions to our store
    this.store.dispatch(new AddItemAction(
      {//payload
        id: '456', 
        name : 'Fanta'
      }
      ));
  }

}
