import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWrapper = document.querySelector('.gallery')
let instance;

window.addEventListener('load', showGallery)

function showGallery() {
  galleryWrapper.innerHTML = createGallery()
}

function createGallery(){
  return (galleryItems.map(({preview, original, description}) => {
    return (`<div class='gallery__item'><a class='gallery__link' href=${original}><img class='gallery__image' src=${preview}  data-source=${original} alt=${description}/></a></div>`)
  }).join('')
  )
}

galleryWrapper.addEventListener('click', onGalleryImageClick)

function onGalleryImageClick(e){
  e.preventDefault()

  if(!e.target.classList.contains('gallery__image')) return

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

  document.querySelector('.modal').addEventListener('click', closeImageModal)
  window.addEventListener('keydown', closeImageModal)
}

function closeImageModal(e) {

  if(e.target === e.currentTarget || e.code === 'Escape') {
    document.querySelector('.modal').classList.add('is-hidden')
    instance.close()
    window.removeEventListener('keydown', closeImageModal)
  }
}



