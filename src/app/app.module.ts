import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ShoppingReducer } from './store/reducers/shopping-reducer';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingService } from './shopping.service';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingEffects } from './effects/shopping-effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //we import a root version of the store module and pass in all the reducers that we have.
    StoreModule.forRoot({
      shopping: ShoppingReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    //pass in the effects to the effect framework
    EffectsModule.forRoot([ShoppingEffects])
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
