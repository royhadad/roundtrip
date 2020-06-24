import React from 'react';
import HeaderItem from './HeaderItem';
import resources from '../../resources/components/header.json';

export default () => {
    return (
        <div className='header-container'>
            <div className='header-inner-container'>
                <div className='header-right-side'>
                    {
                        resources.headerItems.map((headerItem, index) => (<HeaderItem key={index} data={headerItem} />))
                    }
                </div>
                <div className='header-left-side'>
                    <a href='/'>Alray</a>
                    <span>USD $</span>
                </div>
            </div>
        </div>
    );
}