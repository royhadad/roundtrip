import React, { useState, useEffect } from 'react';
import Filter from './filter/Filter';
import Sort from './sort/Sort';
import List from './List';
import getItems from '../selectors/items';

export default () => {
    const [items, setItems] = useState(undefined);
    useEffect(() => {
        const fetchData = async () => {
            setItems(await getItems());
        };
        fetchData();
    }, [])

    return (
        <div className='search-container'>
            <Filter />
            <div className='sort-and-list-container'>
                <Sort />
                <List items={items} />
            </div>
        </div>
    );
}