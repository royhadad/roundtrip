export default (allItems, filters) => {
    //EXAMPLE

    // { text, sortBy, startDate, endDate } = filters;
    // return expenses.filter((expense) => {
    //     const createdAtMoment = moment(expense.createdAt);
    //     const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    //     const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    //     const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    //     return startDateMatch && endDateMatch && textMatch;
    // }).sort((a, b) => {
    //     if (sortBy === 'date') {
    //         return a.createdAt < b.createdAt ? 1 : -1;
    //     } else if (sortBy === 'amount') {
    //         return a.amount < b.amount ? 1 : -1;
    //     }
    // });
    if (!allItems) {
        return null;
    }
    const sortObject = filters.sortObject;
    const sortDirectionFactor = sortObject.isDescending ? -1 : 1;
    return allItems
        .filter((item) => {
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