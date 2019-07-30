// function initForm() {
//     setMinDateValue();
// }
//
// // after date entrance
// function getFreePlaces() {
//
// }
//
// function formatDate(date) {
//     return ('0' + date).slice(-2);
// }
//
// function setMinDateValue() {
//     const today = new Date();
//     const dd = formatDate(today.getDate());
//     const mm = formatDate(today.getMonth() + 1); //January is 0!
//     const yyyy = formatDate(today.getFullYear());
//
//     const result = `${yyyy}-${mm}-${dd}`;
//
//     document.getElementById("input-date").setAttribute("min", result);
// }

import formTemplate from './form.pug'
import ModalWindow from "../modalWindow";

class ModalForm extends ModalWindow{
    // constructor(template) {
    //     super(template);
    // }
}

const a = new ModalForm(formTemplate);
a.init(document.querySelector('.book-place'));
