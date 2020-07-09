import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../actions";

class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    onInputChanged = (input) => {
        this.setState({
            input: input
        });
    }

    onAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({
            input: ""
        });
    }

    render() {
        return (
            <div>
                <input onChange={e => this.onInputChanged(e.target.value)}
                       value={this.state.input}
                />
                <button onClick={this.onAddTodo}>
                    Add
                </button>
            </div>
        )
    }
}

export default connect(
    null,
    {addTodo}
)(AddTodo)