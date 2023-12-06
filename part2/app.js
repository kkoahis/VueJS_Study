const app = Vue.createApp({
    data() {
        return {
            url: 'https://www.facebook.com/kkoahis',
            showBook: true,
            books: [
                { title: "The smurf cat part 2", author: "Khoadeptrai", img: 'assets/jisoo.jpg', isFav: true },
                { title: "The smurf cat part 3", author: "Khoadeptrai", img: 'assets/smurf.jpg', isFav: false },
                { title: "The smurf cat part 4", author: "Khoadeptrai", img: 'assets/spider.jpg', isFav: true },
                { title: "The smurf cat part 5", author: "Khoadeptrai", img: 'assets/spider.jpg', isFav: true },
            ],

        }
    },
    methods: {
        toggleShowBooks() {
            this.showBook = !this.showBook;
        },
        toggleFav(e) {
            if (e.target.className === 'fav') {
                e.target.className = ''
            }
            else {
                e.target.className = 'fav'
            }
        },
        toggleFav2(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav);
            // filter nghĩa là nếu diều kiện bên trong true thì sẽ cho vào mảng mới còn nếu là false thì sẽ loại ra khỏi mảng đó
        }
    }
})

app.mount('#app')