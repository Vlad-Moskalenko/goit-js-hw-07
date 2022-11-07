import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryWrapper = document.querySelector('.gallery')

showGallery()

function showGallery() {
  galleryWrapper.innerHTML = createGallery()
}

function createGallery(){
  return (galleryItems.map(({preview, original, description}) => {
    return (`<a class='gallery__item' href=${original}><img class='gallery__image' src=${preview} alt=${description}/></a>`)
  }).join('')
  )
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
 });





