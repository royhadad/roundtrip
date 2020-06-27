import Item from '../entities/Item';
import moment from 'moment';

//simulates a server request to get the items
export default async () => {
    const allItems = [1, 2, 3, 4, 5].map((rating) => (new Item(
        'Awesome Plaza Hotel',
        819 + 400 * rating,
        rating,
        'https://i.pinimg.com/236x/a8/61/d0/a861d089be59851c9e1db743b10621a8.jpg',
        new moment(),
        new moment().add(rating, 'days'),
        rating % 2 === 0 ? true : false
    )))

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(allItems);
        }, 600);
    })
}