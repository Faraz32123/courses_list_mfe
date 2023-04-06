import * as types from "./types";

export const getCourseList = () => ({
    type: types.GET_COURSES_LIST,
    payload: "",
});

export const setCourseList = (list) => ({
    type: types.SET_COURSES_LIST,
    payload: list,
});
  