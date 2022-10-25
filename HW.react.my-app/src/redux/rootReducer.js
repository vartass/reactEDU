import {combineReducers} from "redux";
import commReducer from "../components/HW5/Comments/commReducer";
import todoReducer from "../components/HW6/ToDo/todoReducer";
import authReducer from "../components/Auth/authReducer";
import postReducer from "../components/HW2/Posts/postReducer";


export default combineReducers({
  auth: authReducer,
  posts: postReducer,
  comments: commReducer,
  todos: todoReducer,
},);