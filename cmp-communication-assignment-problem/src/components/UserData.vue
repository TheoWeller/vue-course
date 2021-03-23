<template>
    <section>
        <header>
            <h1>User data</h1>
        </header>
        <form @submit.prevent="handleSubmit">
            <div>
                <label>Username</label>
                <input type="text" v-model="enteredUsername"/>
            </div>
            <div>
                <label>Age</label>
                <input type="text" v-model="enteredAge"/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    data(){
        return {
            enteredUsername: "",
            enteredAge: ""
        };
    },
    emits: ['add-active-user'],
    methods: {
        handleSubmit(){
            this.$emit('add-active-user', this.enteredUsername, this.enteredAge);
        }
    }
}
</script>