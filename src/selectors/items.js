import getAllItemsAsync from '../utils/getAllItemsAsync';

export default async () => {
    const allItems = await getAllItemsAsync();

    return allItems;
}