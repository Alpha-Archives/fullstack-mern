import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import ideaReducer from "./ideaReducer";

export default combineReducers({
    errors: errorReducer,
    idea: ideaReducer,
    auth: authReducer
});