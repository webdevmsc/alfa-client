import {getUsers} from "./users-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'
const GLOBAL_ERROR = 'GLOBAL_ERROR';

let initialState = {
    initialized: false,
    globalError: null
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        case GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.error
            }
        default:
            return state;
    }
}

export const errorCreator = (error) => ({type: GLOBAL_ERROR, error: error});
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => async (dispatch) => {
    await dispatch(getUsers());
    dispatch(initializedSuccess());
}

export const handleError = (error) => async (dispatch) => {
    await dispatch(errorCreator(error.toString()));
    setTimeout(() => dispatch(errorCreator(null)), 5000);
}




export default appReducer;
