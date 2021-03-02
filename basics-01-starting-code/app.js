const app = Vue.createApp({
    data(){
        return {
            courseGoalA: 'Learn Vue and nail the interview for Dot Dash!',
            courseGoalB: '<h1>Refactor existing React applications to be more performant.<h1/>',
            myGitHubUrl: 'https://github.com/TheoWeller'
        };
    },
    methods:{
        outputGoal(){
            const randomNum = Math.random();
            return randomNum < 0.5 ? this.courseGoalA : this.courseGoalB;
        }
    }
});

app.mount('#user-goal');