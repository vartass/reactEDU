import {LOADING_END, LOADING_START} from "./asyncCommAction";
import initialStore from "../../../redux/initialStore";


export default function commReducer(commentsFromStore = initialStore.comments, {type, error, payload}) {
    switch (type) {
        case LOADING_START:
            return {
                ...commentsFromStore,
                loading: true
            };

        case LOADING_END:
            return {
                ...commentsFromStore,
                loading: false,
                posts: payload
            };

        default:
            return commentsFromStore;
    }
}