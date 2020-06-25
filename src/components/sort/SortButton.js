import React from 'react';

export default ({ sortObject, selectedSortObject, setSortObject, text }) => (
    <button className={`btn sort-button${(sortObject.equals(selectedSortObject)) ? ' sort-button-selected' : ''}`} onClick={() => (setSortObject(sortObject))}>
        {text}
    </button>
)