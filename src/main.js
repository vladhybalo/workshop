import './sass/styles.scss';
import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/database';
import firebaseConfig from './firebase.config';
import initPhotos from "./scripts/modalPhotos";
import ImmediatlyBook from './scripts/modalImmediatlyBook';
import ModalWindow from './scripts/modalWindow';
import ModalForm from './scripts/modalForm';
import AddDayTimetable from './scripts/createTables';

firebase.initializeApp(firebaseConfig);

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    setTimeout(() => {
        document.querySelector('.loading-indicator').classList.add('hide');
    }, 3000);
}
//
// document.addEventListener('load', () => {
//     document.querySelector('.loading-indicator').classList.add('hide');
// });

function setTimetable(daysNumber = 10) {
    const start = new Date();
    const end = new Date(new Date().setDate(new Date().getDate() + daysNumber));

    const addDayTimeTable = new AddDayTimetable(start, end);

    addDayTimeTable.publish();
}

// setTimetable();