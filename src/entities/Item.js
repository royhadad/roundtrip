import { v4 as uuid } from 'uuid';
import itemResources from '../resources/components/item.json';
const numbersInHebrew = itemResources.numbersInHebrew;

class Item {
    constructor(hotel, avgPrice, rating, imgUrl, fromTime, toTime, includesBreakfast) {
        this.id = uuid();
        this.hotel = hotel;
        this.avgPrice = avgPrice;
        this.rating = rating;
        this.imgUrl = imgUrl;
        this.fromTime = fromTime;
        this.toTime = toTime;
        this.includesBreakfast = includesBreakfast
    }

    static getTimeText(time) {
        return time.format("MM/DD | hh:mm");
    }
    getFromTimeText() {
        return Item.getTimeText(this.fromTime);
    }
    getToTimeText() {
        return Item.getTimeText(this.toTime);
    }
    getNumberOfNights() {
        return this.toTime.diff(this.fromTime, 'days');
    }
    static getTextFromNumber(number) {
        //returns the hebrew word in male form of the number, up to 9, above 9 returns the number
        return numbersInHebrew[number] || number;
    }
    getNumberOfNightsText() {
        const numberOfNights = this.getNumberOfNights();
        if (numberOfNights === 1) {
            return `${itemResources.singleNight} ${Item.getTextFromNumber(numberOfNights)}`
        } else {
            return `${Item.getTextFromNumber(numberOfNights)} ${itemResources.manyNights}`
        }
    }
    getAttributesText() {
        return this.includesBreakfast ? `${itemResources.includesBreakfast}` : `${itemResources.onlyRoom}`;
    }
    getDescription() {
        return `${this.getNumberOfNightsText()} | ${this.getAttributesText()}`;
    }
    getDealValue() {
        return (this.getNumberOfNights() / (this.avgPrice / 1000)) * this.rating;
    }
}

export default Item;