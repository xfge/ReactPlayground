import React from 'react';
import './App.css';
import AddTodo from "./containers/AddTodo";
import TodoList from "./containers/TodoList";
import Filters from "./containers/Filters"

function App() {
    return (
        <div className="App">
            <AddTodo/>
            <Filters/>
            <TodoList/>
        </div>
    );
}

export default App;
