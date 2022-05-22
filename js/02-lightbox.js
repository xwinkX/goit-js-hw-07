import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageGallery = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);
imageGallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createGallery(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
