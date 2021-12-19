import { combineReducers } from "redux";
import { offerReducer } from "./offerReducer";

export const rootReducers = combineReducers({
    offer: offerReducer,
});
