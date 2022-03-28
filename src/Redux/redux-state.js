import { combineReducers, createStore } from 'redux'
import mainReducer from './mainReducer'
import aboutReducer from './aboutReducer'
import loginReducer from './loginReducer'

let reducers = combineReducers({
    mainPage: mainReducer,
    aboutPage: aboutReducer,
    login: loginReducer
});

let store = createStore(reducers);

export default store;