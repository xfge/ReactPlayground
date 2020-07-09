import React from "react";
import {VisibilityFilters} from "../actions";

const FilterText = {
    [VisibilityFilters.SHOW_ALL]: 'All',
    [VisibilityFilters.SHOW_ACTIVE]: 'Active',
    [VisibilityFilters.SHOW_COMPLETED]: 'Completed'
}

const FilterButton = ({filter, onClick}) => {
    return (
        <button onClick={onClick}>
            {FilterText[filter]}
        </button>
    );
}

export default FilterButton;