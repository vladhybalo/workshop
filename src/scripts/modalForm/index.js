import formTemplate from './form.pug'
import ModalWindow from "../modalWindow";
import * as firebase from "firebase/app";
import DateFormater from "../FormatDate";

const dateFormater = new DateFormater();

class ModalForm extends ModalWindow {
    // constructor(template) {
    //     super(template);
    // }
    init(elem) {
        super.init(elem);

        this._setMinDateValue();
        this._getFreePlaces();

    }

    _setMinDateValue() {
        const today = new Date();
        const dd = formatDate(today.getDate());
        const mm = formatDate(today.getMonth() + 1); //January is 0!
        const yyyy = today.getFullYear();

        const result = `${yyyy}-${mm}-${dd}`;

        this.root.querySelector("#input-date").setAttribute("min", result);
    }

    _getFreePlaces() {
        this.root.querySelector("#input-date").addEventListener('change', ({target}) => {
            console.log("CHANNGE INPUT????");
            console.log(target.value);
            const date = dateFormater.getDateKey(new Date(target.value));
            console.log(date);

            getFreePlacesFromDatabase(date)
                .then(places => {
                    console.log(places);
                    this._showCafeShema();
                    this._bookTable();
                });
        })
    }

    _showCafeShema() {
        this.root.querySelector('.book-form__cafe-wrap').classList.add('book-form__show');
    }

    _bookTable() {
        this.root.querySelector('.book-form__cafe-wrap').addEventListener('click', e => {
            const bookedPlace = e.target.closest('.book-form__cafe-place');

            if (bookedPlace.classList.contains('booked') || bookedPlace.classList.contains('selected-place')) {
                document.querySelector('.bad-request').classList.add('show-request');
            } else {
                const index = +bookedPlace.dataset.index;
                bookedPlace.classList.add('selected-place');

                document.querySelector('.successful-request').classList.add('show-request');
            }
        });
    }

    _saveBookedTableOnDatabase() {
        const dateFormater = new DateFormater();

    }

}

const a = new ModalForm(formTemplate);
a.init(document.querySelector('.book-place'));

function getFreePlacesFromDatabase(date) {
    const database = firebase.database();

    console.log(database);

    return database.ref('tables/' + date + '/').once('value')
        .then((snapshot) => {
            console.log(snapshot);
            console.log(snapshot.val());

            return snapshot.val();
        });

}

function formatDate(date) {
    return ('0' + date).slice(-2);
}

