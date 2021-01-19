import './css/common.css';
import refs from './js/refs.js';
import apiService from './js/apiService.js';
import updateGalleryMarkup from './js/update-gallery-markup.js';


refs.form.addEventListener('submit', event => {
    event.preventDefault();

    const formInput = event.currentTarget;
    apiService.query = formInput.elements.query.value;

    refs.gallery.innerHTML = '';
    apiService.resetPage();

    refs.button.classList.add('is-hidden');

    apiService.fetchImages().then(hits => { 
        updateGalleryMarkup(hits);
        refs.button.classList.remove('is-hidden');
    })
    formInput.reset();
});

refs.button.addEventListener('click' , () => {
   
    apiService.fetchImages().then(hits => { 
        updateGalleryMarkup(hits);
        
        window.scrollBy({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'});
    });
});




    