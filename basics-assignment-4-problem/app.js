const app = Vue.createApp({
    data(){
        return {
            classInput: "",
            cssPropInput: "",
            showParagraph: true,
            hideParagraph: false,
            showUserOneStyle: false,
            showUserTwoStyle: false
        }
    },
    computed: {
        
    },
    methods: {
        classInputHandler(event){
            this.classInput = event.target.value;
            if(this.classInput === "user1"){this.showUserOneStyle = !this.showUserOneStyle};
            if(this.classInput === "user2"){this.showUserTwoStyle = !this.showUserTwoStyle};
        },
        cssPropInputHandler(event){
            this.cssPropInput = event.target.value;
        },
        toggleVisibility(){
            this.showParagraph = !this.showParagraph;
            this.hideParagraph = !this.hideParagraph;
        },
    }
});

app.mount('#assignment');