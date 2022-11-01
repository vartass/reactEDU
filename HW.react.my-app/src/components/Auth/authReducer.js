import {LOGIN, LOGOUT} from "./authAction";
import initialStore from "../../redux/initialStore";

const authReducer = (auth = initialStore.auth, {type, payload}) => {
    switch (type) {
        case LOGIN:
            return {
                ...auth,
                name: payload
            };
        case LOGOUT:
            return {
                ...auth,
                name: ""
            };
        default:
            return auth;
    }
}

export default authReducer;