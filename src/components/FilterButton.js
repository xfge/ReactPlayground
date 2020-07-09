import React from "react";
import {VisibilityFilters} from "../actions";
import {connect} from "react-redux";

const FilterText = {
    [VisibilityFilters.SHOW_ALL]: 'All',
    [VisibilityFilters.SHOW_ACTIVE]: 'Active',
    [VisibilityFilters.SHOW_COMPLETED]: 'Completed'
}

const FilterButton = ({filter, disabled, onClick}) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {FilterText[filter]}
        </button>
    );
}

const mapState = (state, ownProps) => {
    return {
        disabled: state.visibilityFilter === ownProps.filter
    }
}

export default connect(
    mapState
)(FilterButton);