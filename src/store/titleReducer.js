import {types} from "../types";

const initialState = {
    title: ""
}

export const titleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAY_HELLO:
            return{...state, title: action.payload}
        case types.CLEAR_HELLO:
            return {...state,title: ""}
        default:
            return state
    }
}