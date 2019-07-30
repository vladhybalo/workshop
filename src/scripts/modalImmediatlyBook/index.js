import ModalWindow from "../modalWindow";
import template from './immediatly-book.pug';

// debugger;
// let a = 'dfsdfs;dlfmsd;kl';
// console.dir(template);
// console.dir(template(a));

class ImmediatlyBook extends ModalWindow {
    hide(e) {
        super.hide(e);
        if (e.target.classList.contains('immediatly-book__button')) {
            this.root.classList.remove('show');
            this.root.classList.add('hide');
        }
    }
}

const immediatlyBook = new ImmediatlyBook(template);

immediatlyBook.init(document.querySelector('.quick-book'));
