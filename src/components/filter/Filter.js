import React from 'react';
import { connect } from 'react-redux';
import RatingFilter from './RatingFilter';
import PriceRangeFilter from './PriceRangeFilter';
import IncludesBreakFastFilter from './IncludesBreakFastFilter';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import TextFilter from './TextFilter';
import { toggleRating, setMinPrice, setMaxPrice, toggleShowIncludesBreakfast, toggleShowSleepOnly, setTextFilter } from '../../actions/filters';
import { Collapse } from 'react-collapse';
import resources from '../../resources/components/filter.json';

const absoluteMinPrice = 819;
const absoluteMaxPrice = 4000;

class Filter extends React.Component {
    state = {
        isOpened: false,
        isMobile: false
    }
    componentDidMount() {
        this.checkAndUpdateIsMobile();
        window.addEventListener('resize', this.checkAndUpdateIsMobile);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.checkAndUpdateIsMobile);
    }

    toggleCollapse = () => {
        this.setState((prevState) => ({ isOpened: !prevState.isOpened }));
    }
    checkAndUpdateIsMobile = () => {
        const isMobile = window.matchMedia('(max-width: 800px)').matches;
        if (isMobile !== this.state.isMobile) {
            this.setState(() => ({ isMobile }));
        }
    }

    render() {
        if (!this.state.isMobile) {
            return (
                <div className='filter-container'>
                    <div className='filter-header filter-header-main'>
                        {resources.filterHeader}
                    </div>
                    <FilterInner
                        validRatings={this.props.validRatings}
                        toggleRating={this.props.toggleRating}
                        minPrice={this.props.minPrice}
                        maxPrice={this.props.maxPrice}
                        setMinPrice={this.props.setMinPrice}
                        setMaxPrice={this.props.setMaxPrice}
                        showSleepOnly={this.props.showSleepOnly}
                        toggleShowSleepOnly={this.props.toggleShowSleepOnly}
                        showIncludesBreakfast={this.props.showIncludesBreakfast}
                        toggleShowIncludesBreakfast={this.props.toggleShowIncludesBreakfast}
                        text={this.props.text}
                        setTextFilter={this.props.setTextFilter}
                    />
                </div>
            )
        } else {
            return (
                <div className='filter-container-mobile'>
                    <div className='filter-header filter-header-main' onClick={this.toggleCollapse}>
                        <span className='filter-header-text'>
                            {resources.filterHeader}
                        </span>
                        {
                            this.state.isOpened ? (<ExpandLessIcon />) : (<ExpandMoreIcon />)
                        }
                    </div>
                    <Collapse isOpened={this.state.isOpened}>
                        <FilterInner
                            validRatings={this.props.validRatings}
                            toggleRating={this.props.toggleRating}
                            minPrice={this.props.minPrice}
                            maxPrice={this.props.maxPrice}
                            setMinPrice={this.props.setMinPrice}
                            setMaxPrice={this.props.setMaxPrice}
                            showSleepOnly={this.props.showSleepOnly}
                            toggleShowSleepOnly={this.props.toggleShowSleepOnly}
                            showIncludesBreakfast={this.props.showIncludesBreakfast}
                            toggleShowIncludesBreakfast={this.props.toggleShowIncludesBreakfast}
                            text={this.props.text}
                            setTextFilter={this.props.setTextFilter}
                        />
                    </Collapse>
                </div>
            )
        }
    }
}

const FilterInner = (props) => (
    <div className='filters-container-inner'>
        <RatingFilter
            validRatings={props.validRatings}
            toggleRating={props.toggleRating}
        />
        <hr />
        <PriceRangeFilter
            minPrice={props.minPrice}
            maxPrice={props.maxPrice}
            setMinPrice={props.setMinPrice}
            setMaxPrice={props.setMaxPrice}
            absoluteMin={absoluteMinPrice}
            absoluteMax={absoluteMaxPrice}
        />
        <hr />
        <IncludesBreakFastFilter
            showSleepOnly={props.showSleepOnly}
            toggleShowSleepOnly={props.toggleShowSleepOnly}
            showIncludesBreakfast={props.showIncludesBreakfast}
            toggleShowIncludesBreakfast={props.toggleShowIncludesBreakfast}
        />
        <hr />
        <TextFilter text={props.text} setTextFilter={props.setTextFilter} />
    </div>
)

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