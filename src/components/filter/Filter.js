import React from 'react';
import { connect } from 'react-redux';
import RatingFilter from './RatingFilter';
import PriceRangeFilter from './PriceRangeFilter';
import IncludesBreakFastFilter from './IncludesBreakFastFilter';
import TextFilter from './TextFilter';
import { toggleRating, setMinPrice, setMaxPrice, toggleShowIncludesBreakfast, toggleShowSleepOnly, setTextFilter } from '../../actions/filters';
import resources from '../../resources/components/filter.json';

const absoluteMinPrice = 819;
const absoluteMaxPrice = 4000;

class Filter extends React.Component {
    render() {
        return (
            <div className='filter-container'>
                <div className='filter-header filter-header-main'>
                    {resources.filterHeader}
                </div>
                <div className='filters-container-inner'>
                    <RatingFilter
                        validRatings={this.props.validRatings}
                        toggleRating={this.props.toggleRating}
                    />
                    <hr />
                    <PriceRangeFilter
                        minPrice={this.props.minPrice}
                        maxPrice={this.props.maxPrice}
                        setMinPrice={this.props.setMinPrice}
                        setMaxPrice={this.props.setMaxPrice}
                        absoluteMin={absoluteMinPrice}
                        absoluteMax={absoluteMaxPrice}
                    />
                    <hr />
                    <IncludesBreakFastFilter
                        showSleepOnly={this.props.showSleepOnly}
                        toggleShowSleepOnly={this.props.toggleShowSleepOnly}
                        showIncludesBreakfast={this.props.showIncludesBreakfast}
                        toggleShowIncludesBreakfast={this.props.toggleShowIncludesBreakfast}
                    />
                    <hr />
                    <TextFilter text={this.props.text} setTextFilter={this.props.setTextFilter} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    validRatings: state.filters.validRatings,
    minPrice: state.filters.minPrice,
    maxPrice: state.filters.maxPrice,
    showIncludesBreakfast: state.filters.showIncludesBreakfast,
    showSleepOnly: state.filters.showSleepOnly,
    text: state.filters.text
})
const mapDispatchToProps = (dispatch) => ({
    toggleRating: (rating) => dispatch(toggleRating(rating)),
    setMinPrice: (minPrice) => dispatch(setMinPrice(minPrice)),
    setMaxPrice: (maxPrice) => dispatch(setMaxPrice(maxPrice)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    toggleShowIncludesBreakfast: () => dispatch(toggleShowIncludesBreakfast()),
    toggleShowSleepOnly: () => dispatch(toggleShowSleepOnly())
})
export default connect(mapStateToProps, mapDispatchToProps)(Filter);