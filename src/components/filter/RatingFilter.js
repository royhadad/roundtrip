import React from 'react';
import { Rating } from '@material-ui/lab';
import { Radio } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/MaterialUiStyles';
import formatPrice from '../../utils/formatPrice';
import resources from '../../resources/components/filter.json';

const RatingFilter = ({ validRatings, toggleRating, classes }) => {
    return (
        <div className='rating-filter-container'>
            <div className='filter-header'>
                {resources.ratingFilterHeader}
            </div>
            <div className='ratings-filter-ratings'>
                {
                    validRatings.map((ratingObject) => (
                        <div className='ratings-filter-rating' onClick={() => toggleRating(ratingObject.rating)} key={ratingObject.rating}>
                            <Radio
                                checked={ratingObject.isValid}
                                classes={{ root: classes.filtersRadioButton, checked: classes.checked }}
                            />
                            <Rating
                                value={ratingObject.rating}
                                classes={{ root: classes.rating, iconEmpty: classes.filtersRatingEmpty }}
                                className={classes.buttonPadding}
                                readOnly
                            />
                            <span className='ratings-filter-price'>
                                {formatPrice(resources.ratingsFilterPrice)}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default withStyles(styles)(RatingFilter);