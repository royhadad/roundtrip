import { createStore, combineReducers } from 'redux';
import itemsReducer from '../reducers/items';
import filtersReducer from '../reducers/filters';
import generalReducer from '../reducers/general';

export default () => {
    const store = createStore(
        combineReducers({
            items: itemsReducer,
            filters: filtersReducer,
            general: generalReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
