import {LOADING_POST} from "./postsAction";
import initialStore from "../../../redux/initialStore";
import {ADD_POST} from "./addPostAction";


export default function postReducer(postsFromStore = initialStore.posts, {type, payload}) {
    switch (type) {
        case LOADING_POST:
            return {
                ...postsFromStore,
                loading: true,
                posts: payload
            };
        case ADD_POST:
            return {
                ...postsFromStore,
                posts:[payload,...postsFromStore.posts]
            }
        default:
            return postsFromStore;
    }
}