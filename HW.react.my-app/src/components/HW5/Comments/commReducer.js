import {LOADING_START,LOADING_END} from "./asyncCommAction";
import initialStore from "../../../redux/initialStore";


export default function commReducer(commentsFromStore = initialStore.comments, {type, payload}) {
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
                comments: payload
            };

        default:
            return commentsFromStore;
    }
}