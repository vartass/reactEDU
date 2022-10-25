import {LOADING_POST} from "./postsAction";
import initialStore from "../../../redux/initialStore";


export default function postReducer(postsFromStore = initialStore.posts, {type, payload}) {
    switch (type) {
        case LOADING_POST:
            return {
                ...postsFromStore,
                loading: true,
                posts: payload
            };
        default:
            return postsFromStore;
    }
}