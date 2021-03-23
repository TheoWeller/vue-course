<template>
    <section>
        <h2>My friends!</h2>
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
                    id: "Brennan",
                    name: "Brennan Kelly",
                    phone: "(505) 686-3746",
                    email: "brennan@spins.com"
                },
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
