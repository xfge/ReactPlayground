import React from "react";
import {setVisibilityFilter, VisibilityFilters} from "../actions";
import FilterButton from "../components/FilterButton";
import {connect} from "react-redux";

const Filters = ({setVisibilityFilter}) => {
    return (
        <div>
            {Object.keys(VisibilityFilters).map(filter => (
                <FilterButton key={`filter-button-${filter}`} filter={filter} onClick={() => setVisibilityFilter(filter)} />
            ))}
        </div>
    );
}

export default connect(
    null,
    {setVisibilityFilter}
)(Filters);