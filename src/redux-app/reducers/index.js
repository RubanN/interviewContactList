import taskReducer from "./taskReducer";
import {combineReducers} from "redux";

const rootRedcer = combineReducers({
    tasks:taskReducer
})
export default rootRedcer