import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/models/app-state';
import { ShoppingItem } from './store/models/shopping-item.model';

/**
 * On App run, how does the initial state display in the screen ? 
 * 
 * When the app is run, the app.component is init, 
 * In ngOnInit(), we try to query the store, for "shopping" property in SST.
 * remember, we have registered a reducer for this "shopping" property in the root module.
 * Thus, when we query the SST via the select method for the property "shopping".
 * REDUCER associated with the store slice ("shopping" in our case) is called.
 * Since there is no action passed, initial state is returned.
 */

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
    //gettting data from the store, we would usually create a selector for this.
    //right now we skip it.
    //the select method returns a observable
    this.shoppingItems$ = this.store.select(store=> store.shopping);
  }
}
