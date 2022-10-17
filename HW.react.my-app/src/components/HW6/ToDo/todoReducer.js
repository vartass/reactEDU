import {LOADING_TODO} from "./todoAction";
import initialStore from "../../../redux/initialStore";


export default function todoReducer(todosFromStore = initialStore.todos, {type, payload}) {
    switch (type) {
        case LOADING_TODO:
            return {
                ...todosFromStore,
                loading: true,
                todos: payload
            };
        default:
            return todosFromStore;
    }
}