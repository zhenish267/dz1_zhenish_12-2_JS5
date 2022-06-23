import {types} from "../types";

export const createUserAction = (user) => {
    return{
        type: types.CREATE_USER,
        payload: user
    }
}
export const addNameAction = (name) => {
    return{
        type: types.ADD_NAME,
        payload: name
    }
}