import { Injectable } from "@angular/core";
import {Actions, Effect, ofType} from '@ngrx/effects';
import { of } from "rxjs";
import {map} from 'rxjs/operators';
import { catchError, mergeMap } from "rxjs/operators";
import { ShoppingService } from "../shopping.service";
import { AddItemAction, AddItemFailureAction, AddItemSuccessAction, DeleteItemAction, DeleteItemFailureAction, DeleteItemSuccessAction, LoadShoppingAction, LoadShoppingFailureAction, LoadShoppingSuccessAction, ShoppingActionTypes } from "../store/actions/shopping-actions";
import { ShoppingItem } from "../store/models/shopping-item.model";

//What is an effect ?
/**
 * Usually if you are dealing with a async activity (some activity for which you have to wait) OR network calls
 * its called an effect, effects should not be placed in reducer, because then it will violate the constraint 
 * that reducers are pure functions.
 * 
 * So, to avoid thar, ngrx gives us something called effect.
 * idea is effect will listen to actions dispatched, if an action requires a side effect, 
 * its safely handled outside the store, when handling done, the effect can dispatch another action
 * to the store to do the next thing. 
 */

//what we want ?
//1.intercept actions dispatched to store
//2. check if our action is disaptched
//3. fire http call
//4. in the callback call the next action with the correct data

@Injectable()
export class ShoppingEffects {

    @Effect() loadShopping$ = this.actions$.pipe(
        ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
        mergeMap(
            () => this.shoppingService.getShoppingItems().pipe(
                map((data:ShoppingItem[]) => new LoadShoppingSuccessAction(data)),
                catchError(error => of(new LoadShoppingFailureAction(error)))
            )
        )
    );

    @Effect() addShoppingItem$ = this.actions$.pipe(
        ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
        mergeMap(
            (action) => this.shoppingService.addShoppingItem(action.payload).pipe(
                map(() => new AddItemSuccessAction(action.payload)),
                catchError((error) => of(new AddItemFailureAction(error)))
            )
        )
    );

    @Effect() deleteItemShopping$ = this.actions$.pipe(
        ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
        mergeMap(
            (action) => this.shoppingService.removeShoppingItem(action.payload).pipe(
                map(() => new DeleteItemSuccessAction(action.payload)),
                catchError((error)=> of(new DeleteItemFailureAction(error)))
            )
        )
    );

    constructor(
        private readonly actions$: Actions,
        private readonly shoppingService : ShoppingService
        ) {}


}