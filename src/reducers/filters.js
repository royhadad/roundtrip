import SortObject from '../entities/SortObject';
import RatingObject from '../entities/RatingObject';

const filtersReducerDefaultState = {
    sortObject: new SortObject('price', false),
    validRatings: [1, 2, 3, 4, 5].map((rating) => (new RatingObject(rating, true))),
    minPrice: 0,
    maxPrice: 0,
    showIncludesBreakfast: true,
    showSleepOnly: true,
    text: ''
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_SORT':
            return {
                ...state,
                sortObject: action.sortObject
            };
        case 'TOGGLE_RATING':
            return {
                ...state,
                validRatings: state.validRatings.map(({ rating, isValid }) => ({ rating, isValid: (action.rating === rating) ? (!isValid) : (isValid) }))
            };
        case 'SET_MIN_PRICE':
            return {
                ...state,
                minPrice: action.minPrice
            };
        case 'SET_MAX_PRICE':
            return {
                ...state,
                maxPrice: action.maxPrice
            };
        case 'TOGGLE_SHOW_INCLUDES_BREAKFAST':
            return {
                ...state,
                showIncludesBreakfast: !state.showIncludesBreakfast
            }
        case 'TOGGLE_SHOW_SLEEP_ONLY':
            return {
                ...state,
                showSleepOnly: !state.showSleepOnly
            }
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
};