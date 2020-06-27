export const setSort = (sortObject) => ({
    type: 'SET_SORT',
    sortObject
})
export const toggleRating = (rating) => ({
    type: 'TOGGLE_RATING',
    rating
})
export const setMinPrice = (minPrice) => ({
    type: 'SET_MIN_PRICE',
    minPrice
})
export const setMaxPrice = (maxPrice) => ({
    type: 'SET_MAX_PRICE',
    maxPrice
})
export const toggleShowIncludesBreakfast = () => ({
    type: 'TOGGLE_SHOW_INCLUDES_BREAKFAST'
})
export const toggleShowSleepOnly = () => ({
    type: 'TOGGLE_SHOW_SLEEP_ONLY'
})
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});