class DateFormater {
    constructor() {
        // this.date = date;
    }

    getDateKey(date) {
        return `${this.addFirstZeroIfRequired(date.getDate())}-${this.addFirstZeroIfRequired(date.getMonth() + 1)}-${date.getFullYear()}`
    }

    addFirstZeroIfRequired(date) {
        return ('0' + date).slice(-2);
    }
}

export default DateFormater;