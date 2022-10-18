import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TodoAction} from "./todoAction";
import axios from "axios";

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
        return <p className={"p"} key={todo.id}>{todo.title} </p>
    })

    return (
        <div>
            <h1>TODOS</h1>
            {todosMapRedux}
            <h1>TODOS</h1>
            {todosMap}
        </div>
    );
};

export default Todo;