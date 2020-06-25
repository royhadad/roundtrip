import React from 'react';
import resources from '../../resources/components/sort.json';

export default ({ sortOptions, selectedSortObject, setSortObject }) => {
    const selectedSortObjectIndex = sortOptions.reduce((selectObjectIndex, sortOption, currentIndex) => {
        return selectedSortObject.equals(sortOption.sortObject) ? currentIndex : selectObjectIndex;
    }, -1);

    return (
        <div>
            <select onChange={(e) => setSortObject(sortOptions[e.target.value].sortObject)} value={selectedSortObjectIndex}>
                {
                    sortOptions.map((sortOption, index) => (
                        <option
                            value={index}
                            key={index}
                        >
                            {resources.sortBy}
                            {sortOption.text}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}