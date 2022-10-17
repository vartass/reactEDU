import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TodoAction} from "./todoAction";

const Todo = (props) => {
    const dispatch = useDispatch();

    const [todoTitle, setTodoTitle] = useState("");
    useEffect(()=>{
        dispatch(TodoAction())
        },[])

    const todos = useSelector((store)=>(store.todos));
    const todosMap = todos.todos.map((todo, i) => {
        return <p className={"p"} key={todo.id}>{todo.title} </p>
    })

    return (
        <div>
            <h1>TODOS</h1>
            {todosMap}
        </div>
    );
};

export default Todo;