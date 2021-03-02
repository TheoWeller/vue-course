const app = Vue.createApp({
    data(){
        return {
            courseGoal: 'Learn Vue and nail the interrview for Dot Dash!',
            myGitHubUrl: 'https://github.com/TheoWeller'
        };
    }
});

app.mount('#user-goal');