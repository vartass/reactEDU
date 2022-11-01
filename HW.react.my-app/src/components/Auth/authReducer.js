import {LOGIN, LOGOUT} from "./authAction";
import initialStore from "../../redux/initialStore";

const authReducer = (auth = initialStore.auth, {type, payload}) => {
    switch (type) {
        case LOGIN:
            return {
                ...auth,
                modal: true,
                name: payload
            };
        case LOGOUT:
            return {
                ...auth,
                modal: false,
                name: ""
            };
        default:
            return auth;
    }
}

export default authReducer;