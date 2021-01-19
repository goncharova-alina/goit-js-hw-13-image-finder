import './css/common.css';
import refs from './js/refs.js';
import apiService from './js/apiService.js';
import updateGalleryMarkup from './js/update-gallery-markup.js';


refs.form.addEventListener('submit', event => {
    event.preventDefault();

    const formInput = event.currentTarget;
    apiService.searchQuery = formInput.elements.query.value;

    refs.gallery.innerHTML = '';
    formInput.reset();

    apiService.page = 1;

    apiService.fetchImages(searchQuery, page).then(hits => { 
        updateGalleryMarkup(hits);
        page += 1;
    })
} );

refs.button.addEventListener('click' , () => {
   
    apiService.fetchImages(searchQuery, page).then(hits => { 
        updateGalleryMarkup(hits);
        page += 1;
    });
});




    