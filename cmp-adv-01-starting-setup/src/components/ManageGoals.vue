<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="saveGoal">Set Goal</button>
    <error-alert v-if="inputInvalid">
        <h2>Input invalid</h2>
        <p>Please enter at least somecharacters...</p>
        <button @click="confirmError">Ok</button>
    </error-alert>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'
export default {
    components: {
        ErrorAlert
    },
    data(){
        return {
            inputInvalid: false,
        };
    },
    methods: {
        saveGoal(){
            const enteredValue = this.$refs.goal.value;
            if(enteredValue.length === 0){ this.inputInvalid = !this.inputInvalid; }
        },
        confirmError(){this.inputInvalid = !this.inputInvalid; },
    },
}
</script>