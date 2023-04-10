import * as types from "./types";
import { initialState } from "./init"


export const coursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_COURSES_LIST:
            return {
                ...state,
                courses_list : action.payload,
            };
    }
}
