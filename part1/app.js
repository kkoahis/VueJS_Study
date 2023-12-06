const app = Vue.createApp({
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            title: "The smurf cat part 2",
            author: "Khoadeptrai",
            age: 24
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title;
        }
    }
})

const app2 = Vue.createApp({
    data() {
        return {
            title2: "Optimus prime",
            author2: "Bumble bee",
            age2: 11,
            showBook: true
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBook = !this.showBook;
        }
    }
})

const app3 = Vue.createApp({
    data() {
        return {
            title3: "Nobita",
            author3: "Shizuka",
            age3: 15,
            showBook3: true,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks3() {
            this.showBook3 = !this.showBook3;
        },
        handleEvent(e, data) {
            console.log(e, e.type);
            if (data) {
                console.log(data);
            }
        },
        handleMousemove(e) {
            this.x = e.clientX;
            this.y = e.clientY;
        }
    }
})

app.mount('#app')
app2.mount('#app2')
app3.mount('#app3')