const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goalInput: ""
    };
  },
  methods: {
    addGoal(){
      this.goals.push(this.goalInput);
    }
  }
});

app.mount('#user-goals');
