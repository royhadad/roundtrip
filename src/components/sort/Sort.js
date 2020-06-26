import React from 'react';
import { connect } from 'react-redux';
import { setSort } from '../../actions/filters';
import SortObject from '../../entities/Sort';
import SortButton from './SortButton';
import SortDropDown from './SortDropDown';
import resources from '../../resources/components/sort.json';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

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
                        text={<span><AttachMoneyIcon className='sort-button-icon' />&nbsp;{resources.cheapest}&nbsp;&nbsp;</span>}
                        selectedSortObject={this.props.sort}
                        setSortObject={this.props.setSort}
                    />
                    <SortButton
                        sortObject={mostPopularSortObject}
                        text={<span><i className="fa fa-trophy" aria-hidden="true" />&nbsp;{resources.mostPopular}</span>}
                        selectedSortObject={this.props.sort}
                        setSortObject={this.props.setSort}
                    />
                    <SortButton
                        sortObject={bestDealSortObject}
                        text={<span><AccountBalanceWalletIcon className='sort-button-icon' />&nbsp;{resources.bestDeal}</span>}
                        selectedSortObject={this.props.sort}
                        setSortObject={this.props.setSort}
                    />
                </div>
                <span className='sort-vertical-line'>|</span>
                <SortDropDown
                    sortOptions={sortOptions}
                    selectedSortObject={this.props.sort}
                    setSortObject={this.props.setSort}
                />
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