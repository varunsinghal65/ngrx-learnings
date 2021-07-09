//this is your single state tree.

import { ShoppingState } from "../reducers/shopping-reducer";

export interface AppState {
    readonly shopping: ShoppingState
};