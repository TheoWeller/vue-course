<template>
    <section>
        <header>
            <h1>Active user</h1>
        </header>
        <h2>Username: {{ username }}</h2>
        <h3>Age: {{ age }}</h3>
    </section>
</template>

<script>
export default {
    props: {
        username: String,
        age: String
    },
}
</script>