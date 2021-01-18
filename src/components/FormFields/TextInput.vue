<template>
  <div>
    <label :for="slugName">{{name}}</label>
    <input
      :name="slugName"
      :id="slugName"
      type="text"
      :placeholder="name"
      v-model="inputValue"
      @keyup="setFormData(inputValue)"
    >
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'TextInput',
  props: {
    name: String,
  },
  data() {
    return {
      inputValue: null,
    };
  },
  computed: {
    slugName() {
      return this.name.toLowerCase().split(' ').join('-');
    },
  },
  methods: {
    ...mapActions('form', ['changeFormData']),
    setFormData(value) {
      let name = this.name.split(' ');
      name[0] = name[0].toLowerCase();
      name = name.join('');
      this.$store.dispatch('changeFormData', { name, value });
    },
  },
};
</script>
