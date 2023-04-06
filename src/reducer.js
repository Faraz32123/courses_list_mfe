import * as types from "./types";
import { initialState } from "./init"


export const coursesReducer = (state = initialState.courses_list, action) => {
    switch (action.type) {
        case types.SET_COURSES_LIST:
            return {
                ...state,
                list: action.payload,
            };
    }
}

