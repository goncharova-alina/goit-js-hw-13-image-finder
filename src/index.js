import './css/common.css';
import galleryItem from './templates/gallery-item.hbs'; 
import refs from './js/refs.js';

refs.form.addEventListener('submit', event => {
    event.preventDefault();

    const inputValue = event.currentTarget.elements.query.value;
    console.log(event.currentTarget.elements);
    const apiKey = '12041816-7b3c6fcda05d87e4a56d1e906';

    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${inputValue}&per_page=12&key=${apiKey}`;

fetch(url)
.then(response => response.json())
.then(({hits}) => {
    // console.log(hits);
    const markup = galleryItem(hits);
    // console.log(markup)
    refs.gallery.insertAdjacentHTML('beforeend', markup);
    })
} );


    