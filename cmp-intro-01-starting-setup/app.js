const app = Vue.createApp({
    data(){
        return {
            detailsAreVisible: false,
            friends: [
                {
                    id: "Tom",
                    name: "Tom from Myspace",
                    phone: "505-603-8701",
                    email: "tom@myspace.com"
                },
                {
                    id: "Manuel",
                    name: "Manuel Lorenz",
                    phone: "01234 5678 991",
                    email: "manuel@localhost.com"
                }
            ]
        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }

});

app.mount('#app');