import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TodoAction} from "./todoAction";
import TodosList from "./TodosList";
import AddPagination from "../../HW8/Pagination/Pagination";

const Todo = (props) => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage] = useState(10);
    useEffect(()=>{
        dispatch(TodoAction())
    },[])

    const todos = useSelector((store)=>(store.todos));

    const lastTodoIndex = currentPage * todosPerPage
    const firstTodoIndex = lastTodoIndex - todosPerPage
    const currentTodo = todos.todos.slice(firstTodoIndex,lastTodoIndex)

    const paginate = pageNumber =>{setCurrentPage(pageNumber)}

    return (
        <div>
            <h1>TODOS</h1>
            <TodosList todos={currentTodo}/>
            <AddPagination
                currentPage={currentPage}
                elemPerPage={todosPerPage}
                totalElem={ todos.todos.length}
                paginate={paginate}
            />
        </div>
    );
};

export default Todo;