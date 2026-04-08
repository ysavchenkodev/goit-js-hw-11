//*  ======================================================

import {toTotalmarkup, notFoundImage, ShowLargeImg , refresh, somethingWrong, clearGallery, showLoader, hideLoader} from "./js/render-functions";
import { getImagesByQuery } from "./js/pixabay-api";
import 'pure-css-loader/dist/css-loader.css';

//*  ======================================================

const refs = {
    listItemElem: document.querySelector('.gallery'),
    formElem: document.querySelector('.form'),
    loader: document.querySelector('.loader'),
}

//*  ======================================================

ShowLargeImg();
refs.formElem.addEventListener('submit', handleFormElemSubmit);

function handleFormElemSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const objFormData = {
        searchImg: formData.get('search-text'),
    };
    showLoader(refs.loader)
    getImagesByQuery(objFormData.searchImg)
       .then((res) => {
            hideLoader(refs.loader);
            const len = res.hits.length
            if (len === 0) {
                notFoundImage();
                clearGallery(refs.listItemElem)
                return;
            }
            refs.listItemElem.innerHTML = toTotalmarkup(res.hits)
            refresh();
        }).catch((error) => {
            hideLoader(refs.loader);
            somethingWrong();
        })
};


//*  ======================================================

