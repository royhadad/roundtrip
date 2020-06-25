import React from 'react';
import { Rating } from '@material-ui/lab';
import itemResources from '../../resources/components/item.json';
const resources = itemResources.itemMiddle;

export default ({ item }) => {
    return (
        <div className='item-middle'>
            <div className='item-middle-data'>
                <div className='item-header'>
                    {item.hotel}
                </div>
                <Rating value={item.rating} className='material-ui-rating' readOnly />
                <div className='item-time'>
                    <span className='item-time-text'>{resources.fromText}</span>
                    <span className='item-time-value'>{item.getFromTimeText()}</span>
                </div>
                <div className='item-time'>
                    <span className='item-time-text'>{resources.toText}</span>
                    <span className='item-time-value'>{item.getToTimeText()}</span>
                </div>
                <div className='item-description'>
                    {item.getDescription()}
                </div>
            </div>
            <div className='item-middle-show-more-button btn'>
                {resources.showMoreButton}
            </div>
        </div>
    );
}