import { images } from "./gallerySrc/images";
import { createGaleryItems } from "./gallerySrc/createGalery";
import simpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', createGaleryItems(images));

new simpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition:	'bottom',
  captionDelay: 250,
});
