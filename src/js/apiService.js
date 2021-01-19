export default {
    apiKey: '12041816-7b3c6fcda05d87e4a56d1e906',
    page: 1,
    searchQuery: '',

    fetchImages() {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.apiKey}`;
    
        return fetch(url)
        .then(response => response.json())
        .then(({hits}) => {
            this.page += 1;
            return hits;
    });
},
    resetPage() {
        this.page = 1;
    },

    get query() {
        return this.searchQuery;
      },
    
      set query(value) {
        this.searchQuery = value;
      },
};