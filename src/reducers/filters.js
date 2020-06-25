import moment from 'moment';
import SortObject from '../entities/Sort';
// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sort: new SortObject('price', false),
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SET_SORT':
            return {
                ...state,
                sort: action.sort
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};