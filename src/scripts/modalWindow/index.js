// function initModal() {
//     document.querySelector('.photos').addEventListener('click', (e) => {
//         document.querySelector('.modal__wrap').classList.remove('hide');
//         document.querySelector('.modal__wrap').classList.add('show');
//         e.preventDefault();
//     });
//
//
//     document.querySelector('.modal__close').addEventListener('click', () => {
//         document.querySelector('.modal__wrap').classList.add('hide');
//         document.querySelector('.modal__wrap').classList.remove('show');
//     })
// }
//
// export default initModal;

import modalPug from '../../mixins/modal-window.pug'

class ModalWindow {
    constructor(htmlTemplate) {
        this.root = document.createElement('div');
        this.root.innerHTML = modalPug();
        this.root = this.root.firstChild;
        this.root.querySelector('.modal__content').innerHTML = htmlTemplate(); //modalPug('<p>testset</p>');
    }

    init(showItem) {
        // add hide listener
        document.querySelector('main').appendChild(this.root);
        this.root.querySelector('.modal__close-icon').addEventListener('click', this.hide.bind(this));

        showItem.addEventListener('click', this.show.bind(this));
    }

    show() {
        this.root.classList.remove('hide');
        this.root.classList.add('show');
    }

    hide({target}) {
        if (target.closest('.modal__close-icon')) {
            this.root.classList.remove('show');
            this.root.classList.add('hide');
        }
    }
}

export default ModalWindow;
