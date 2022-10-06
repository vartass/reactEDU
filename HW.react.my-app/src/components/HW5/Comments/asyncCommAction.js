import axios from "axios";

export const LOADING_START = "LOADING"
export const LOADING_END = "LOADING_END"

export function CommAction() {

    return (dispatch) => {
        dispatch({type: LOADING_START});
        axios('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                console.log(res);
                dispatch({
                    type: LOADING_END,
                    payload: res.data
                })
            })
    }
}