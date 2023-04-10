import { call, put, takeLatest } from 'redux-saga/effects';
import { getRequest } from './request';
import * as types from './types';
import * as actions from './action';

function* getCoursesList(action) {
  try {
    var url =
      'http://local.overhang.io/api/courses_list/list/' + action.payload;
    if (action.payload) {
      url = url + '?filterText=' + action.payload;
    }

    const apiData = yield getRequest(url);
    yield put(actions.setCourseList({ list: apiData }));
  } catch (error) {
    console.log(error);
  }
}

export function* coursesListWatcher() {
  yield takeLatest(types.GET_COURSES_LIST, getCoursesList);
}
