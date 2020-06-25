import resources from '../resources/data/items.json';
const allItems = resources.allItems;

//simulates a server request to get the items
export default async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(allItems);
        }, 2000);
    })
}