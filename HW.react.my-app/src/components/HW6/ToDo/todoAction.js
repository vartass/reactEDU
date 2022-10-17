import axios from "axios";

export const LOADING_TODO = "LOADING_TODO"

export function TodoAction() {

    return (dispatch) => {
        axios('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                console.log(res);
                dispatch({
                    type: LOADING_TODO,
                    payload: res.data
                })
            })
    }
}