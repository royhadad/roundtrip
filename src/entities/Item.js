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

    getTimeText(time) {
        return time.format("MM/DD | hh:mm");
    }
    getFromTimeText() {
        return this.getTimeText(this.fromTime);
    }
    getToTimeText() {
        return this.getTimeText(this.toTime);
    }
    getNumberOfNights() {
        return this.toTime.diff(this.fromTime, 'days');
    }
    getTextFromNumber(number) {
        //returns the hebrew word in male form of the number, up to 9, above 9 returns the number
        return numbersInHebrew[number] || number;
    }
    getNumberOfNightsText() {
        const numberOfNights = this.getNumberOfNights();
        if (numberOfNights === 1) {
            return `${itemResources.singleNight} ${this.getTextFromNumber(numberOfNights)}`
        } else {
            return `${this.getTextFromNumber(numberOfNights)} ${itemResources.manyNights}`
        }
    }
    getAttributesText() {
        return this.includesBreakfast ? `${itemResources.includesBreakfast}` : `${itemResources.onlyRoom}`;
    }
    getDescription() {
        return `${this.getNumberOfNightsText()} | ${this.getAttributesText()}`;
    }
}

export default Item;