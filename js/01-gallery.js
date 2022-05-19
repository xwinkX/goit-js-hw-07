import { galleryItems } from './gallery-items.js';

// Change code below this line
const imageGallery = document.querySelector('.gallery');

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
    event.preventDefault();
    console.log(event.target);
} 
console.log(galleryItems);

