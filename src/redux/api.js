import store from "./store"
import {VisibilityFilters} from "../actions";

export const getDisplayTodos = () => {
    const {todos, visibilityFilter} = store.getState();
    switch (visibilityFilter) {
        case VisibilityFilters.SHOW_ACTIVE: {
            return todos.filter(todo => !todo.completed)
        }
        case VisibilityFilters.SHOW_COMPLETED: {
            return todos.filter(todo => todo.completed)
        }
        case VisibilityFilters.SHOW_ALL:
        default:
            return todos;
    }
}