export default (allItems, filters) => {
    if (!allItems) {
        return null;
    }
    const sortObject = filters.sortObject;
    const sortDirectionFactor = sortObject.isDescending ? -1 : 1;
    return allItems
        .filter((item) => {
            // price
            if (item.avgPrice < filters.minPrice || item.avgPrice > filters.maxPrice) {
                return false;
            }

            // rating
            const itemRatingObject = filters.validRatings.find((ratingObject) => ratingObject.rating === item.rating);
            if (!itemRatingObject || !itemRatingObject.isValid) {
                return false;
            }

            // includesBreakfast
            if (!filters.showIncludesBreakfast && item.includesBreakfast) {
                return false;
            }
            if (!filters.showSleepOnly && !item.includesBreakfast) {
                return false;
            }

            // text
            if (!item.hotel.toLowerCase().includes(filters.text.toLowerCase())) {
                return false;
            }

            // if didn't fail any test, returns true
            return true;
        })
        .sort((item1, item2) => {
            switch (sortObject.type) {
                case 'price':
                    return (item1.avgPrice - item2.avgPrice) * sortDirectionFactor;
                case 'rating':
                    return (item1.rating - item2.rating) * sortDirectionFactor;
                case 'bestDeal':
                    return (item1.getDealValue() - item2.getDealValue()) * sortDirectionFactor;
                default:
                    return 1;
            }
        });
}