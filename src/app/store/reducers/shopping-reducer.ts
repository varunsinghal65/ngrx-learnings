import { ShoppingAction, ShoppingActionTypes } from "../actions/shopping-actions";
import { ShoppingItem } from "../models/shopping-item.model";

const initialState : Array<ShoppingItem> = [{
    id : "123",
    name : 'Coke - Initial state'
}];

export function ShoppingReducer(
    //This reducer has 2 MAPPINGS.
    /**
     * 1. SST "shopping" property is mapped to it in root module.
     * 2. All actions of type "ShoppingAction" will be directed here.
     */
    //"state" will be equal to the initial state if "shopping" in SST is empty
    //otherwise, it will be equal to the current value of "shopping" in SST.
    state: Array<ShoppingItem> = initialState,
    //type of "action" input param is very important.
    //the store framework will invoke this reducer for all the actions of the type "ShoppingAction".
    action: ShoppingAction) {
        switch(action.type) {
            case ShoppingActionTypes.ADD_ITEM:
                return [...state, action.payload];
            case ShoppingActionTypes.REMOVE_ITEM:
                return state.filter((shoppingItem)=>shoppingItem.id !== action.payload); 
            default:
                return state;   
        }
}