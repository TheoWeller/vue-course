const app = Vue.createApp({
    data(){
        return {
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

});

app.component('friend-contact', {
    template: `
    <li :key="friend.id">
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
    data(){
        return {
            detailsAreVisible: false,
            friend: {
                id: "Tom",
                name: "Tom from Myspace",
                phone: "505-603-8701",
                email: "tom@myspace.com"
            },
        };
    },
    methods: {
        toggleDetails(){ this.detailsAreVisible = !this.detailsAreVisible; },
    }
})

app.mount('#app');