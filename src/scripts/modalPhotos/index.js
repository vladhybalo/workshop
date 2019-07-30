import $ from 'jquery';
import 'slick-carousel';
import photosTemplate from './photos.pug';
import ModalWindow from "../modalWindow";

function initPhotos() {
    document.querySelector('.modal__content').innerHTML = ht();

    $('.gallery').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
}

export default initPhotos;

class ModalPhotos extends ModalWindow{
    constructor(template) {
        super(template);
    }

    init(elem) {
        super.init(elem);
        $('.gallery').slick({
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }
}

const modalPhotos = new ModalPhotos(photosTemplate);

modalPhotos.init(document.querySelector('.photos'));
