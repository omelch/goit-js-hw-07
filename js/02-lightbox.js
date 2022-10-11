import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryImagesMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML('beforeend', galleryMarkup);


function createGalleryImagesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `
}).join('')
             
}


var lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250 });


    



