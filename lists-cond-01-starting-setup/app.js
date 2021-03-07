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
    },
    removeGoal(index){
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
