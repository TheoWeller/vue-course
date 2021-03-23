<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  data(){
    return {
      detailsAreVisible: false
    }
  },
  // props:['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  // props: {name: String, phoneNumber: String, emailAddress: String, isFavorite: String},
  props: {
    id: {
      type: String,
      required: true
      },
    name: {
      type: String,
      required: true
      },
    phoneNumber: {
      type: String,
      required: true
      },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: (value) => value === "1" || value === "0"  
    },
    },
  emits: ['toggle-favorite', 'delete-contact'],
  methods: {
    toggleDetails() { this.detailsAreVisible = !this.detailsAreVisible; },
    toggleFavorite() { this.$emit('toggle-favorite', this.id); },
    deleteFriend() { this.$emit('delete-contact', this.id); },
  }
};
</script>