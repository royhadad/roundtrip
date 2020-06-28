import React from 'react';
import { Rating } from '@material-ui/lab';
import itemResources from '../../resources/components/item.json';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/MaterialUiStyles';
const resources = itemResources.itemMiddle;

const ItemMiddle = ({ item, classes }) => {
    return (
        <div className='item-middle'>
            <div className='item-middle-data'>
                <div className='item-header'>
                    {item.hotel}
                </div>
                <Rating value={item.rating} classes={{ root: classes.rating, iconEmpty: classes.itemRatingEmpty }} readOnly />
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
            <div className='item-middle-show-more-button btn' onClick={() => alert('הכפתור יציג חבילות נוספות')}>
                {resources.showMoreButton}
            </div>
        </div>
    );
}

export default withStyles(styles)(ItemMiddle);