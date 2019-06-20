import axios from "axios";
import { put, call, takeEvery, all } from "redux-saga/effects";
import {
    GET_USERS,
    FETCH_USERS_SAGA,
    FETCH_ADDITIONAL_INFO_SAGA,
    GET_ADDITIONAL_INFO,
    FETCH_NEW_USERS_SAGA,
    ADD_NEW_USERS
} from "./../constants";
import {
    GITHUB_USERS
} from "./../../helpers/endpoints";

import { getUsersInAmount, getNewUsers} from "./../../helpers/config";

function* usersSaga() {
    yield takeEvery(FETCH_USERS_SAGA, function*() {
        try {
            const requestResult = yield call(axios.get, getUsersInAmount(100));
            yield put({ type: GET_USERS, payload: requestResult.data });
        } catch (e) {
            console.log(e);
        }
    });
}

function* additionalInfoSaga() {
    yield takeEvery(FETCH_ADDITIONAL_INFO_SAGA, function*({ payload }) {
        try {
            const requestResult = yield call(axios.get, `${GITHUB_USERS}/${payload}`);
            yield put({ type: GET_ADDITIONAL_INFO, payload: requestResult.data });
        } catch (e) {
            console.log(e);
        }
    });
}

function* newUsersSaga() {
    yield takeEvery(FETCH_NEW_USERS_SAGA, function*({ payload }) {
        try {
            const requestResult = yield call(axios.get, getNewUsers(payload));
            yield put({ type: ADD_NEW_USERS, payload: requestResult.data });
        } catch (e) {
            console.log(e);
        }
    });
}

export default function* rootSaga() {
    yield all([usersSaga(), additionalInfoSaga(), newUsersSaga()]);
}
