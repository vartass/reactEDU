import React from "react";

const TodosList = (todos) => {
    const todosRender =  todos.todos.map((todo) => (
        <p className={"p"} key={todo.id}>
            <li key={todo.id}>{todo.title}</li>
        </p>))
    return (
        <ul className="list-group mb2">
            {todosRender}
        </ul>
    )
}
export default TodosList