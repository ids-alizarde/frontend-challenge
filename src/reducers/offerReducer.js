import { Constants } from "../constants/constants";

const initialState = {};

export const offerReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.offerDisplay:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};
