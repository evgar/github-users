import {
    FETCH_USERS_SAGA,
    FETCH_ADDITIONAL_INFO_SAGA,
    FETCH_NEW_USERS_SAGA,
    CLEAR_ADDITIONAL_INFO
} from "../constants";

export const userActions = {
    fetchUsers: () => ({ type: FETCH_USERS_SAGA }),
    fetchAdditionalInfo: payload => ({
        type: FETCH_ADDITIONAL_INFO_SAGA,
        payload
    }),
    fetchNewUsers: payload => ({
        type: FETCH_NEW_USERS_SAGA,
        payload
    }),
    clearAdditionalInfo: () => ({ type: CLEAR_ADDITIONAL_INFO })
};
