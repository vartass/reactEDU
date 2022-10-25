import axios from "axios";

export const LOADING_POST = "LOADING_POST"

export function PostAction() {

    return (dispatch) => {
        axios('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                // console.log(res);
                dispatch({
                    type: LOADING_POST,
                    payload: res.data
                })
            })
    }
}