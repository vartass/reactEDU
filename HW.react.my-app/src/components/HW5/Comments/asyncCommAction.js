import axios from "axios";

export const LOADING_START = "LOADING"
export const LOADING_END = "LOADING_END"

// export const LOADING_ERROR ="LOADING_ERROR"

export function CommAction() {

    return (dispatch) => {
        dispatch({type: LOADING_START});
        axios('https://jsonplaceholder.typicode.com/comments/1')
            .then(res => {
                dispatch({
                    type: LOADING_END,
                    payload: res.data
                })
            })
    }
}