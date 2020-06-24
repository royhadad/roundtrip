import React from 'react';
import Filter from './filter/Filter';
import Sort from './sort/Sort';
import List from './List';

export default () => {
    return (
        <div className='search-container'>
            <Filter />
            <div className='sort-and-list-container'>
                <Sort />
                <List />
            </div>
        </div>
    );
}