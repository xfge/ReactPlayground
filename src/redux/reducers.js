import {ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO} from "../actions/actionTypes";
import {combineReducers} from "redux";
import {VisibilityFilters} from "../actions";

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            const {id, content} = action.payload;
            return [
                ...state, {
                    id: id,
                    content: content,
                    completed: false
                }
            ];
        }
        case TOGGLE_TODO:
            const {id} = action.payload;
            return state.map((todo, index) => {
                if (id === index) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return todo;
                }
            })
        default:
            return state;
    }
}

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER: {
            const {filter} = action.payload;
            return filter;
        }
        default:
            return state;
    }
}


export default combineReducers({todos, visibilityFilter})