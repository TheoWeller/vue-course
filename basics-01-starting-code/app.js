const app = Vue.createApp({
    data(){
        return {
            courseGoal: 'Learn Vue and nail the interrview for Dot Dash!',
            myGitHubUrl: 'https://github.com/TheoWeller'
        };
    },
    methods:{
        outputGoal(){
            const randomNum = Math.random();
            return randomNum < 0.5 ? "Master Vue!" : "Learn Vue";
        }
    }
});

app.mount('#user-goal');