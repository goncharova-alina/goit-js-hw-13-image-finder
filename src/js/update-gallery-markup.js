import galleryItem from '../templates/gallery-item.hbs'; 
import refs from '../js/refs.js';


function updateGalleryMarkup(hits) {
    const markup = galleryItem(hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
}
export default updateGalleryMarkup;
