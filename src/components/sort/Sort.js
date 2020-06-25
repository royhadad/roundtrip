import React from 'react';
import { connect } from 'react-redux';
import { setSort } from '../../actions/filters';
import SortObject from '../../entities/Sort';
import SortButton from './SortButton';
import SortDropDown from './SortDropDown';
import resources from '../../resources/components/sort.json';

class Sort extends React.Component {
    render() {
        const cheapestSortObject = new SortObject('price', false)
        const mostPopularSortObject = new SortObject('rating', true);
        const bestDealSortObject = new SortObject('bestDeal', true)

        const sortTexts = [
            resources.priceAsce, resources.priceDesc, resources.ratingDesc, resources.ratingAsce, resources.bestDeal
        ]
        const sortObjects = [
            cheapestSortObject,
            new SortObject('price', true),
            mostPopularSortObject,
            new SortObject('rating', false),
            bestDealSortObject
        ]
        const sortOptions = sortObjects.map((sortObject, index) => ({
            sortObject,
            text: sortTexts[index]
        }))

        return (
            <div className='sort-container'>
                <div className='sort-buttons-container'>
                    <SortButton
                        sortObject={cheapestSortObject}
                        text={resources.cheapest}
                        selectedSortObject={this.props.sort}
                        setSortObject={this.props.setSort}
                    />
                    <SortButton
                        sortObject={mostPopularSortObject}
                        text={resources.mostPopular}
                        selectedSortObject={this.props.sort}
                        setSortObject={this.props.setSort}
                    />
                    <SortButton
                        sortObject={bestDealSortObject}
                        text={resources.bestDeal}
                        selectedSortObject={this.props.sort}
                        setSortObject={this.props.setSort}
                    />
                </div>
                <span className='sort-vertical-line'>|</span>
                <div className='sort-dropdown-container'>
                    <SortDropDown
                        sortOptions={sortOptions}
                        selectedSortObject={this.props.sort}
                        setSortObject={this.props.setSort}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    sort: state.filters.sort
})
const mapDispatchToProps = (dispatch) => ({
    setSort: (sort) => dispatch(setSort(sort))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sort);