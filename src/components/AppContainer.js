import React from 'react';
import JoinUs from './misc/JoinUs';
import SearchContainer from './SearchContainer';

export default () => {
    return (
        <div className='app-container__wrapper'>
            <div className='app-container'>
                <SearchContainer />
            </div>
            <JoinUs />
        </div>
    )
}