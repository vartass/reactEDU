import axios from "axios";

export const LOADING = "LOADING"

export function CommAction() {

    return (dispatch) => {
        // dispatch({type: LOADING_START});
        axios('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                console.log(res);
                dispatch({
                    type: LOADING,
                    payload: res.data
                })
            })
    }
}