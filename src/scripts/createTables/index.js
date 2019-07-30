// import * as firebase from "firebase/app";
// import 'firebase/storage';
// import 'firebase/database';

import firebase from 'firebase/app';
import dateFormater from '../FormatDate';


class AddDayTimetable {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    publish() {
        const dateFormater = new DateFormater();

        while (+this.start <= +this.end) {
            const database = firebase.database();
            const key = dateFormater.getDateKey(this.start);

            database.ref('tables/' + key).set({
                tableList: [
                    {
                        id: 1,
                        booked: false,
                    },
                    {
                        id: 2,
                        booked: false,
                    },
                    {
                        id: 3,
                        booked: false,
                    },
                    {
                        id: 4,
                        booked: false,
                    },
                ]
            })
                .then(response => {
                    console.dir(response);
                })
                .catch(err => {
                    console.warn(err);
                });

            this.start.setDate(this.start.getDate() + 1);
        }
    }
}

export default AddDayTimetable;
