import { galleryItems } from './gallery-items.js';

// Change code below this line
const imageGallery = document.querySelector('.gallery');
// const imageGalleryClose = document.querySelector('.basicLightbox');
const galleryMarkup = createGallery(galleryItems);
imageGallery.insertAdjacentHTML('beforeend', galleryMarkup);
imageGallery.addEventListener('click', galleryElementClick);

function createGallery(images) {
        return images
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
             alt= "${description}"
        />
     </a>
    </div>
    `;
        })
        .join('');
}


function galleryElementClick(event) {
    // imageGalleryClose.addEventListener('keydown', event);
    // if (event.code === 'Escape') {
    //     instance.close();
    // }
event.preventDefault();
const imageEl = event.target.classList.contains('gallery__image');
    if (!imageEl) {
        return
    } else {
        const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`)
        instance.show()
    }
}
console.log(galleryItems);

