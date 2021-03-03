const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput(){
      this.confirmedName = event.target.value;
    },
    submitForm(event){
      alert("Submitted")
    },
    setName(event){
      this.name = event.target.value;
    },
    incrementCounter(num){
      this.counter = this.counter + num;
    },
    decrementCounter(num){
      this.counter = this.counter - num;
    },
  }
});

app.mount('#events');
