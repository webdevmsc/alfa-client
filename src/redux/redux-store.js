import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import appReducer from "./app-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleWare from "redux-thunk";

let reducers = combineReducers({
    app: appReducer,
    users: usersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;
