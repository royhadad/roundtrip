import React, { useEffect } from 'react';
import resources from '../../resources/components/filter.json';
import styles from '../../styles/MaterialUiStyles';
import { withStyles } from '@material-ui/core/styles';
import { Slider } from '@material-ui/core';
import formatPrice from '../../utils/formatPrice';

const PriceRangeFilter = ({ minPrice, maxPrice, setMinPrice, setMaxPrice, absoluteMin, absoluteMax, classes }) => {
    useEffect(() => {
        setMinPrice(absoluteMin);
        setMaxPrice(absoluteMax);
    }, [setMinPrice, setMaxPrice, absoluteMin, absoluteMax]);

    const handleSliderChange = (event, [newMinValue, newMaxValue]) => {
        setMinPrice(newMinValue);
        setMaxPrice(newMaxValue);
    }
    return (
        <div className='price-range-container'>
            <div className='filter-header'>
                {
                    resources.priceRangeFilterHeader
                }
            </div>
            <div className='selected-price-range-wrapper'>
                <div className='selected-min-price'>
                    {formatPrice(minPrice)}
                </div>
                <div className='selected-max-price'>
                    {formatPrice(maxPrice)}
                </div>
            </div>
            <Slider
                defaultValue={[absoluteMin, absoluteMax]}
                min={absoluteMin}
                max={absoluteMax}
                onChangeCommitted={handleSliderChange}
                valueLabelDisplay='auto'
                classes={{ root: classes.priceRangeSlider, valueLabel: classes.priceRangeValueLabel }}
            />
        </div>
    );
}

export default withStyles(styles)(PriceRangeFilter);