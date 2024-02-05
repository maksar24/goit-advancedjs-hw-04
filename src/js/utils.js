import { elements } from "./elements";

function createGalleryMarkup(arr) {
    const markup = arr.map(
        ({
            webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads
        }) => 
            `<li class="gallery__item">
                <a class="gallery__link" href="${largeImageURL}" >
                    <img class="gallery__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
                    <div class="gallery__info">
                        <p class="gallery__info__item">
                            <b>Likes</b>
                            ${likes}
                        </p>
                        <p class="gallery__info__item">
                            <b>Views</b>
                            ${views}
                        </p>
                        <p class="gallery__info__item">
                            <b>Comments</b>
                            ${comments}
                        </p>
                        <p class="gallery__info__item">
                            <b>Downloads</b>
                            ${downloads}
                        </p>
                    </div>
                </a>
            </li>`
    ).join("");

    elements.gallery.insertAdjacentHTML("beforeend", markup);
};

function clearGallery() {
    elements.form.reset();
    elements.gallery.innerHTML = "";
}

export {
    createGalleryMarkup,
    clearGallery
};