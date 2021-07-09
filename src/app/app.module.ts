import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ShoppingReducer } from './store/reducers/shopping-reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //we import a root version of the store module and pass in all the reducers that we have.
    StoreModule.forRoot({
      shopping: ShoppingReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
