import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWrapper = document.querySelector('.gallery')
let instance;

window.addEventListener('load', showGallery)

galleryWrapper.addEventListener('click', onGalleryImageClick)

function showGallery() {
  galleryWrapper.innerHTML = createGallery()
}

function createGallery(){
  return galleryItems.reduce((acc, {preview, original, description}) => {
    return acc +
      `<div class='gallery__item'>
        <a class='gallery__link' href=${original}>
          <img class='gallery__image' src=${preview}  data-source=${original} alt=${description}/>
        </a>
      </div>`}, '')
}

function onGalleryImageClick(e){
  e.preventDefault()

  if(e.target.nodeName !== 'IMG') return

  instance = createImageModal(e.target.dataset.source);

  showImageModal(instance)
}

function createImageModal(url) {
  return basicLightbox.create(`
  <div class="modal">
    <img class="modal__image" src=${url} width="800" height="600">
  </div>
`)
}

function showImageModal(objModal){
  objModal.show()

  window.addEventListener('keydown', closeImageModal)
}

function closeImageModal(e) {
  if(e.code === 'Escape') {
    instance.close()
    window.removeEventListener('keydown', closeImageModal)
  }
}
