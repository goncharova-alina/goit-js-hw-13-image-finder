const apiKey = '12041816-7b3c6fcda05d87e4a56d1e906';

let page = 1;

function fetchImages(searchQuery) {
    const url = 'https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&page=${page}&per_page=12'

    return fetch(url)
        .then(response => response.json())
        .then(({ hits }) => console.log(hits));
        // .then(json => console.log(json));
}

export default fetchImages;