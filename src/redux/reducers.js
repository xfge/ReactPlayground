import {ADD_TODO, TOGGLE_TODO} from "../actions/actionTypes";
import {combineReducers} from "redux";

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
            return state
    }
}

export default combineReducers({todos})