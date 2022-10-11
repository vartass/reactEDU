import {LOADING} from "./asyncCommAction";
import initialStore from "../../../redux/initialStore";


export default function commReducer(commentsFromStore = initialStore.comments, {type, payload}) {
    switch (type) {
        case LOADING:
            return {
                ...commentsFromStore,
                loading: true,
                comments: payload
            };
        default:
            return commentsFromStore;
    }
}