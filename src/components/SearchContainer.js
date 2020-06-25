import React from 'react';
import { connect } from 'react-redux';
import { setItems } from '../actions/items';
import itemsSelector from '../selectors/items';
import Filter from './filter/Filter';
import Sort from './sort/Sort';
import List from './List';
import getAllItemsAsync from '../utils/getAllItemsAsync';

class SearchContainer extends React.Component {
    componentDidMount = async () => {
        const items = await getAllItemsAsync();
        this.props.setItems(items);
    }

    render() {
        return (
            <div className='search-container'>
                <Filter />
                <div className='sort-and-list-container'>
                    <Sort />
                    <List items={this.props.items} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: itemsSelector(state.items, state.filters)
})
const mapDispatchToProps = (dispatch) => ({
    setItems: (items) => dispatch(setItems(items))
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);