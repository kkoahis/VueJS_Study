const app = Vue.createApp({
    data() {
        return {
            url: 'https://www.facebook.com/kkoahis',
            showBook: true,
            books: [
                { title: "The smurf cat part 2", author: "Khoadeptrai", age: 24 },
                { title: "The smurf cat part 3", author: "Khoadeptrai", age: 24 },
                { title: "The smurf cat part 4", author: "Khoadeptrai", age: 24 },
                { title: "The smurf cat part 5", author: "Khoadeptrai", age: 24 },
            ],

        }
    },
    methods: {
        toggleShowBooks() {
            this.showBook = !this.showBook;
        }
    }
})

app.mount('#app')