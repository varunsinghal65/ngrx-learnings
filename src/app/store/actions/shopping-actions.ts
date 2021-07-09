

import {Action} from '@ngrx/store'
import { ShoppingItem } from '../models/shopping-item.model'

//Actions, used whenever we want to update the SST (single state tree) or communicate with our store.
//While creating action following has to be done:
/*
1. create action types enum
2. implement action interface by creating a class
3. export the class created
*/

//action types
export enum ShoppingActionTypes {
    // string rep of actions, should be unique  
    ADD_ITEM = '[SHOPPING] Add Item',
    REMOVE_ITEM = '[SHOPPING] Remove Item'
}

//creating action
//Each action has 2 properties - 1. type 2. payload
export class AddItemAction implements Action {
    //type
    readonly type:ShoppingActionTypes = ShoppingActionTypes.ADD_ITEM;
    //optional - payload
    constructor(public payload: ShoppingItem) {}
}

export class RemoveItemAction implements Action {
    readonly type:ShoppingActionTypes = ShoppingActionTypes.REMOVE_ITEM;
    constructor(public payload:String){}
}

//export the actions
export type ShoppingAction = AddItemAction | RemoveItemAction;