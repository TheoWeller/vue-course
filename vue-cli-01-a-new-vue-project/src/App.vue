<template>
    <section>
        <header><h1>My friends!</h1></header>
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>

<script>

export default {
    data(){
        return {
            friends: [
                {
                    id: "Tom",
                    name: "Tom Kelly",
                    phone: "(505) 486-3746",
                    email: "Tom@spins.com"
                },
            ]
        };
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
</style>
