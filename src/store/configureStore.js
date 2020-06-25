import { createStore, combineReducers } from 'redux';
import itemsReducer from '../reducers/items';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            items: itemsReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
