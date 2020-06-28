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
        if (isMobile !== this.props.isMobile) {
            this.setState(() => ({ isMobile }));
        }
    }

    renderInnerFilterContainerJSX = () => (
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
    )

    render() {
        return (
            <div className={'filter-container' + (this.props.isMobile ? '-mobile' : '')}>
                <div className='filter-header filter-header-main' onClick={this.props.isMobile ? this.toggleCollapse : () => { }}>
                    {resources.filterHeader}
                    {this.props.isMobile && (this.state.isOpened ? (<ExpandLessIcon />) : (<ExpandMoreIcon />))}
                </div>
                {this.props.isMobile ? (
                    <Collapse isOpened={this.state.isOpened}>
                        {this.renderInnerFilterContainerJSX()}
                    </Collapse>
                ) : (
                        this.renderInnerFilterContainerJSX()
                    )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isMobile: state.general.isMobile,
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