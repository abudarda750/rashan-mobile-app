import {
    SET_USER,
    SET_USERS_ERROR,
    SET_USERS_PROCESSING,
} from '../action-types/user-action-types';


const initState = () => {
    return {
        processing: false,
        message: 'Unable to find user data',
        error: null,
        user: null,

    };
};

const user_reducer = (state = initState(), action) => {

    let newState = {...state};

    switch (action.type) {
        case SET_USER:
            setData(newState, action.payload, 'user');
            break;
        case SET_USERS_ERROR:
            setData(newState, action.payload, 'error');
            break;
        case SET_USERS_PROCESSING:
            setData(newState, action.payload, 'processing');
            break;
    
        default:
            break;
    }

    return newState;
};

const setData = (state, payload, key) => {
    state[key] = payload;
};


export default user_reducer;
