import {LOG_USER} from "../actions/actions";

const initialState = {
    user: {

    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_USER:
            state = {...state, user: action.payload}
            break;
    }

    return state;
}