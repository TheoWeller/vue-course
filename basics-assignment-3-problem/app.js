const app = Vue.createApp({
    data(){
        return {
            counter: 0,
        }
    },
    methods: {
        incrementCount(val){ this.counter = this.counter + val; },
    },
    computed: {
        result(){ return this.counter > 37 ? 'Too much!' : 'Not there yet'; }
    },
    watch: {
        result(value){
            if(value === 'Too much!') {
                setTimeout(() => {
                    this.counter = 0;
                }, 5000);
            };
        }
    }
});

app.mount('#assignment');