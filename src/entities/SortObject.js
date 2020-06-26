export default class SortObject {
    constructor(type, isDescending) {
        this.type = type;
        this.isDescending = isDescending;
    }

    equals(other) {
        if (!other) {
            return false;
        }
        return this.type === other.type && this.isDescending === other.isDescending;
    }
}