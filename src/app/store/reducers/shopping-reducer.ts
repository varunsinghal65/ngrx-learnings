import { ShoppingAction, ShoppingActionTypes } from "../actions/shopping-actions";
import { ShoppingItem } from "../models/shopping-item.model";

//Reducer are used to update the state in SST.
//they are pure functions.
//they should never modify variables external to it (side-effect)
//they take the action, extract payload, take the previous state, create new state and returns it.

//we have a initial SST, in case actions receives are not present in the switch
const initialState : Array<ShoppingItem> = [{
    id : "123",
    name : 'Coke'
}];

export function ShoppingReducer(
    state: Array<ShoppingItem> = initialState, 
    action: ShoppingAction) {
        switch(action.type) {
            case ShoppingActionTypes.ADD_ITEM:
                return [...state, action.payload];
            default:
                return state;   
        }
}