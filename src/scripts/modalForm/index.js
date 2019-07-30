import formTemplate from './form.pug'
import ModalWindow from "../modalWindow";
import * as firebase from "firebase/app";

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
        this.root.querySelector("#input-date").addEventListener('change', () => {
            console.log("CHANNGE INPUT????")
            getFreePlacesFromDatabase()
                .then(places => {
                    console.log(places);
                    this._showCafeShema();
                    this._handlePlaceBook();
                });
        })
    }

    _showCafeShema() {
        this.root.querySelector('.book-form__cafe-wrap').classList.add('book-form__show');
    }

    _handlePlaceBook() {
        this.root.querySelector('.book-form__cafe-wrap').addEventListener('click', e => {
            const bookedPlace = e.target.closest('.book-form__cafe-place');
            console.log(bookedPlace);
            if (bookedPlace.classList.contains('booked') || bookedPlace.classList.contains('selected-place')) {
                // show wtf dog)
                document.querySelector('.bad-request').classList.add('show-request');
            } else {
                const index = +bookedPlace.dataset.index;
                // rewrite concrete place

                bookedPlace.classList.add('selected-place');

                document.querySelector('.successful-request').classList.add('show-request');
                setTimeout(() => {
                    document.querySelector('.successful-request').classList.remove('show-request');
                }, 5000);
            }
        });
    }

}

const a = new ModalForm(formTemplate);
a.init(document.querySelector('.book-place'));

function getFreePlacesFromDatabase() {
    const database = firebase.database();

    console.log(database);

    return database.ref('tables/').once('value')
        .then((snapshot) => {
            console.log(snapshot);
            console.log(snapshot.val());

            return snapshot.val();

            // show cafe maket
        });

}

function formatDate(date) {
    return ('0' + date).slice(-2);
}

