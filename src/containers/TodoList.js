import React from "react";
import {connect} from "react-redux";
import {toggleTodo} from "../actions";
import {getDisplayTodos} from "../redux/api";

const TodoList = ({todos, toggleTodo}) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={`todo-item-${todo.id}`} onClick={() => toggleTodo(todo.id)}
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none'
                    }}
                >
                    {todo.content}
                </li>
            ))}
        </ul>
    )
}

const mapState = (state) => {
    return {
        todos: getDisplayTodos()
    }
};

export default connect(
    mapState,
    {toggleTodo}
)(TodoList)