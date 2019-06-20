import {
    ADD_NEW_USERS,
    CLEAR_ADDITIONAL_INFO,
    GET_ADDITIONAL_INFO,
    GET_USERS
} from "../constants";

const data = {
    users: [],
    user: {}
};

export const usersActions = (state = data, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };

        case GET_ADDITIONAL_INFO:
            return {
                ...state,
                user: action.payload
            };

        case CLEAR_ADDITIONAL_INFO:
            return {
                ...state,
                user: {}
            };

        case ADD_NEW_USERS:
            return {
                ...state,
                users: [...state.users, ...action.payload]
            };

        default:
            return state;
    }
};

export default usersActions;
