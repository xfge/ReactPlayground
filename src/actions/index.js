import {ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO} from "./actionTypes";

let nextTodoId = 0
export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: nextTodoId++,
        content
    }
})

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    payload: {
        filter
    }
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: {
        id
    }
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
