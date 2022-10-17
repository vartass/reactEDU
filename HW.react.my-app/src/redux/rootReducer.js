import {combineReducers} from "redux";
import commReducer from "../components/HW5/Comments/commReducer";
import todoReducer from "../components/HW6/ToDo/todoReducer";


export default combineReducers({
  comments: commReducer,
  todos: todoReducer
},);