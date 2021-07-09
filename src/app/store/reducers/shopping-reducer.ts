import { ShoppingAction, ShoppingActionTypes } from "../actions/shopping-actions";
import { ShoppingItem } from "../models/shopping-item.model";

const initialState : Array<ShoppingItem> = [{
    id : "123",
    name : 'Coke - Initial state'
}];

export function ShoppingReducer(
    state: Array<ShoppingItem> = initialState,
    //type of "action" input param is very important.
    //the store framework will invoke this reducer for all the actions of the type "ShoppingAction".
    action: ShoppingAction) {
        switch(action.type) {
            case ShoppingActionTypes.ADD_ITEM:
                return [...state, action.payload];
            default:
                return state;   
        }
}