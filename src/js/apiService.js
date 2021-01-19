export default {
    apiKey: '12041816-7b3c6fcda05d87e4a56d1e906',
    page: 1,
    searchQuery: '',

    fetchImages(searchQuery, page = 1) {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;
    
        return fetch(url)
        .then(response => response.json())
        .then(({hits}) => hits);
    }
};