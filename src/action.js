import * as types from "./types";

export const getCourseList = (filter) => ({
  type: types.GET_COURSES_LIST,
  payload: filter,
});

export const setCourseList = (list) => ({
  type: types.SET_COURSES_LIST,
  payload: list,
});
