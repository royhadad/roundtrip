export default theme => ({
    filtersRadioButton: {
        color: 'white',
        '&$checked': {
            color: 'white'
        },
        paddingRight: 0,
        paddingLeft: 0
    },
    checked: {},
    rating: {
        color: '#FFA767',
        flexGrow: 1,
        justifyContent: 'space-evenly'
    },
    filtersRatingEmpty: {
        color: '#5A5E9D'
    },
    itemRatingEmpty: {
        color: 'white'
    },
    priceRangeSlider: {
        color: 'white',
        width: '95%'
    },
    priceRangeValueLabel: {
        color: '#5A5E9D',
        fontWeight: '600'
    },
    textFilter: {
        background: 'white',
        borderRadius: '0.2rem',
        padding: '0.2rem 0.5rem',
        width: '100%'
    },
    textFilterInput: {
        color: '#666666',
        fontSize: '0.8rem'
    },
    dropDown: {}
});