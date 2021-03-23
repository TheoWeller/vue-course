<template>
<section>
    <header>
      <h1>New Friend</h1>
    </header>   
    <form @submit.prevent="submitData">
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName"/>
        </div>
        <div>
            <label>Phone</label>
            <input type="text" v-model="enteredPhone"/>
        </div>
        <div>
            <label>Email</label>
            <input type="text" v-model="enteredEmail"/>
        </div>
        <div>
            <button>Add Contact</button>
        </div>
    </form>
</section>
</template>

<script>
export default {
    data(){
        return {
            enterName: "",
            enteredPhone: "",
            enteredEmail: ""
        };
    },
    emits: ['add-contact'],
  methods: {
      submitData(){
          this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail);
      },
  }
}
</script>