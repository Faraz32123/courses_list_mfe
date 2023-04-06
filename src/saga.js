import { call, put, takeLatest } from "redux-saga/effects";
import { getRequest  } from "./request";
import * as types from "./types";

function* getCoursesList(filters="") {
  try {
    const apiData = call("http://local.overhang.io:8000/api/courses_list/list/?"+filters)
    console.log(apiData)
  } catch (error) {
    console.log(error)
  }
}

export function* feedbackListWatcher() {
  yield takeLatest(types.GET_COURSES_LIST, getCoursesList);
}
