import {usersAPI} from "../api/api";

const SET_USERS = 'SET_USERS';
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const UPDATE_USER = 'UPDATE_USER';

let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.users };
        case ADD_USER:
            return { ...state, users: [action.user, ...state.users] }
        case REMOVE_USER:
            return { ...state, users: state.users.filter(user => user.id !== action.id) }
        case UPDATE_USER:
            return { ...state, users: state.users.map(s => s.id === action.user.id ?
                    Object.assign({}, s, action.user) : s )};
        default:
            return state;
    }
}


export const setUsers = (users) => ({type: SET_USERS, users})
export const addUser = (user) => ({type: ADD_USER, user})
export const setDeleteUser = (id) => ({type: REMOVE_USER, id})
export const setUpdateUser = (user) => ({type: UPDATE_USER, user})

export const getUsers = () => async (dispatch) => {
    let response = await usersAPI.getUsers();
    dispatch(setUsers(response));
}

export const createUser = (user) => async (dispatch) => {
    let response = await usersAPI.createUser(user);
    dispatch(addUser(response.user));
}

export const deleteUser = (id) => async (dispatch) => {
    await usersAPI.deleteUser(id);
    dispatch(setDeleteUser(id));
}

export const updateUser = (user) => async (dispatch) => {
    let response = await usersAPI.updateUser(user);
    dispatch(setUpdateUser(response.updatedUser));
}

export default usersReducer;
