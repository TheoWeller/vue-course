const app = Vue.createApp({
    data(){
        return {
            list: [],
            listItemInput: "",
            showList: true
        }
    },
    computed: {
        toggleButtonText: () => this.showList ? "Hide List" : "Show List",
    },
    methods: {
        setListInput(event){
            this.listItemInput = event.target.value;
        },
        addListItem(){
            this.list.push(this.listItemInput);
        },
        toggleShowList(){
            this.showList = !this.showList;
        }
    },
});

app.mount("#assignment");