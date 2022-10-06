import {combineReducers} from "redux";
import commReducer from "../components/HW5/Comments/commReducer";


export default combineReducers({
  comments: commReducer

},);