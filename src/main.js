import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImageCollection } from "./js/pixabayAPI";
import { elements } from "./js/elements";
import {
    createGalleryMarkup,
    clearGallery
} from "./js/utils";

let currentSearchDate = "";
let page = 1;
let totalPictures = 0;

iziToast.settings({
    close: false,
    timeout: 4000,
    theme: 'light',
    position: 'topRight',
    progressBarColor: '#50ac86',
})

function handlerInput(e) {
    currentSearchDate = e.target.value.trim();
};

async function handlerSubmit(e) {
    e.preventDefault();

    if (!currentSearchDate) return;

    try {
        const { hits, totalHits } = await fetchImageCollection(currentSearchDate);
        if (!hits.length) {
            clearGallery();
            elements.button.style.display = "none";
            console.log("Sorry, there are no images matching your search query.Please try again.");
            iziToast.show({
                title: "❌",
                message: "Sorry, there are no images matching your search query.Please try again.",
                color: '#e34234',
            });
            return
        };
        totalPictures = totalHits;
        page = 1;
        iziToast.show({
            title: "✅",
            message: `Hooray! We found ${totalHits} images.`,
            color: '#85ff7a',
        });
        clearGallery();
        createGalleryMarkup(hits);
        elements.button.style.display = "block";
        new SimpleLightbox(".gallery__link");
    } catch (error) {
        console.log(error.message);
    };
};

async function handlerLoadMore(e) {
    e.preventDefault();

    try {
        page = page + 1;
        const totalPages = Math.ceil(totalPictures / 40);
        if (totalPages >= page) {
            const { hits } = await fetchImageCollection(currentSearchDate, page);
            createGalleryMarkup(hits);
            new SimpleLightbox(".gallery__link").refresh();
            const { height: cardHeight } = elements.gallery.firstElementChild.getBoundingClientRect();
            window.scrollBy({
                top: cardHeight * 2,
                behavior: "smooth",
            });
        } else {
            elements.button.style.display = "none";
            console.log("We're sorry, but you've reached the end of search results.");
            iziToast.show({
                title: "",
                message: "We're sorry, but you've reached the end of search results.",
                color: '#e34234',
            });
        };
    } catch (error) {
        console.log(error.message);
    }
};

elements.form.addEventListener("submit", handlerSubmit);
elements.form.addEventListener("input", handlerInput);
elements.button.addEventListener("click", handlerLoadMore);