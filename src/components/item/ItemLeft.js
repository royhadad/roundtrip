import React from 'react';
import itemResources from '../../resources/components/item.json';
import formatPrice from '../../utils/formatPrice';
const resources = itemResources.itemLeft;

export default ({ item }) => {
    return (
        <div className='item-left'>
            <div className='item-left-price-and-text-container'>
                <span className='item-left-price'>
                    {formatPrice(item.avgPrice)}
                </span>
                <span className='item-left-text'>
                    {resources.text}
                </span>
            </div>
            <button className='item-left-button btn' onClick={() => alert('הכפתור יציג פרטים נוספים')} >
                {resources.buttonText}
            </button>
        </div>
    );
}