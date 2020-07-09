import React from "react";
import {connect} from "react-redux";
import {toggleTodo} from "../actions";

function TodoList({todos, toggleTodo}) {
    return (
        <ul>
            {todos.map(todo => (
                <li style={{
                    textDecoration: todo.completed ? 'line-through' : 'none'
                }} onClick={() => toggleTodo(todo.id)}
                >
                    {todo.content}
                </li>
            ))}
        </ul>
    )
}

const mapState = (state) => ({
    todos: state.todos
});

export default connect(
    mapState,
    {toggleTodo}
)(TodoList)