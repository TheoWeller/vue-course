const app = Vue.createApp({
    data(){
        return {
            output: "",
            confirmedOutput: ""
        }
    },
    methods: {
        showAlert(){
            alert("Click stonks")
        },
        handleInput(event){
            this.output = event.target.value;
        },
        confirmedInput(event){
            this.confirmedOutput = event.target.value;
        }
    }
});

app.mount("#assignment")