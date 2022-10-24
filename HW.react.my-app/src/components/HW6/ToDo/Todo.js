import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TodoAction} from "./todoAction";
import axios from "axios";
import {Link} from "@mui/material";

const Todo = (props) => {
    const dispatch = useDispatch();

    let [todoTitle, setTodoTitle] = useState();
    useEffect(()=>{
        dispatch(TodoAction())
        axios('https://jsonplaceholder.typicode.com/todos')
            .then(res =>
                setTodoTitle(res.data)
            )

        },[])

    const todosMap = todoTitle?.map((todo)=> <p className={"p"} key={todo.id}>{todo.title} </p>)

    const todos = useSelector((store)=>(store.todos));
    const todosMapRedux = todos.todos.map((todo) => {
        return <Link sx={{ color: 'black'}}><p className={"p"} key={todo.id}><li key={todo.id}>{todo.title}</li></p></Link>
    })

    return (
        <div>
            <h1>TODOS</h1>
            {todosMapRedux}
            {/*<h1>TODOS</h1>*/}
            {/*{todosMap}*/}
        </div>
    );
};

export default Todo;