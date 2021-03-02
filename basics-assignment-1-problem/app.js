const app = Vue.createApp({
    data(){
        return {
            name: "Theo",
            age: 26,
            stonksLink: "https://compote.slate.com/images/926e5009-c10a-48fe-b90e-fa0760f82fcd.png?width=1200&rect=680x453&offset=0x30"
        }
    },
    methods: {
        myAgeInFiveYears(){
            return this.age + 5;
        },
        myFavNumber(){
            return Math.round(Math.random());
        }
    }
})

app.mount("#assignment")