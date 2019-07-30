import './sass/styles.scss'

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    console.log('d')
    const menu = document.querySelector('.header__menu');
    const hamBtn = document.querySelector('.hamburger');
    hamBtn.addEventListener('click', () => {
        console.log('toggle')
        menu.classList.toggle('hide_list');
    })
}

// import Parallax from 'parallax-js'
//
// var scene = document.querySelector('main');
// var parallaxInstance = new Parallax(scene);
//
// import lightGallery from 'lightgallery.js'

// import 'lightgallery.js';
// import 'lg-zoom.js';
// import 'lightgallery.js/dist/css/lightgallery.css';

// lightGallery(document.querySelector('.gallery'));

// import initModal from './scripts/modalWindow';
import initPhotos from "./scripts/modalPhotos";
//
// initModal();

// initPhotos();

import ModalWindow from './scripts/modalWindow'

import ModalForm from './scripts/modalForm'
