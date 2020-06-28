import Item from '../entities/Item';
import moment from 'moment';

// simulates a server request to get the items
export default async () => {
    const hotelNames = ['Awesome Plaza Hotel', 'Royal Beach Hotel', 'Dan Panorama'];
    const allItems = [4, 3, 2, 1, 5, 2, 5].map((rating, index) => (new Item(
        hotelNames[index % 3],
        819 + 400 * index,
        rating,
        'https://i.pinimg.com/236x/a8/61/d0/a861d089be59851c9e1db743b10621a8.jpg',
        new moment().add(index, 'days').add(index, 'hours').add(index, 'minutes'),
        new moment().add(index * 3 + 1, 'days').add(index * 3 + 1, 'hours').add(index * 3 + 1, 'minutes'),
        index % 2 === 0 ? true : false
    )))

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(allItems);
        }, 600);
    })
}