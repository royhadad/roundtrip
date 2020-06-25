import React from 'react';
import itemResources from '../../resources/components/item.json';
const resources = itemResources.itemLeft;

export default ({ item }) => {
    return (
        <div className='item-left'>
            <div className='item-left-price-and-text-container'>
                <span className='item-left-price'>
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(item.avgPrice)}
                </span>
                <span className='item-left-text'>
                    {resources.text}
                </span>
            </div>
            <button className='item-left-button btn'>
                {resources.buttonText}
            </button>
        </div>
    );
}