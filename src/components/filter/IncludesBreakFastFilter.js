import React from 'react';
import resources from '../../resources/components/filter.json';
import styles from '../../styles/MaterialUiStyles';
import { withStyles } from '@material-ui/core/styles';
import { Radio } from '@material-ui/core';
import formatPrice from '../../utils/formatPrice';

// helper component
const RadioItem = ({ text, price, checked, onClick, classes }) => (
    <div className='includes-breakfast-filter-item' onClick={onClick}>
        <Radio
            checked={checked}
            classes={{ root: classes.filtersRadioButton, checked: classes.checked }}
        />
        <span className='includes-breakfast-filter-item-text'>
            {text}
        </span>
        <span className='includes-breakfast-filter-item-price'>
            {formatPrice(price)}
        </span>
    </div>
)

// main component
const IncludesBreakfastFilter = ({ showSleepOnly, toggleShowSleepOnly, showIncludesBreakfast, toggleShowIncludesBreakfast, classes }) => {
    return (
        <div className='includes-breakfast-filter-container'>
            <div className='filter-header'>
                {resources.includesBreakfastFilterHeader}
            </div>
            <RadioItem
                classes={classes}
                checked={showSleepOnly}
                text={resources.sleepOnlyText}
                price={resources.sleepOnlyPrice}
                onClick={toggleShowSleepOnly}
            />
            <RadioItem
                classes={classes}
                checked={showIncludesBreakfast}
                text={resources.includesBreakfastText}
                price={resources.includesBreakfastPrice}
                onClick={toggleShowIncludesBreakfast}
            />
        </div>
    );
}

export default withStyles(styles)(IncludesBreakfastFilter);