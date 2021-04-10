<template>
  <div>
    <label :for="slugName">{{name}}</label>
    <input
      :name="slugName"
      :id="slugName"
      type="text"
      :placeholder="name"
      v-model="inputValue"
      @keyup="handleKeyUp(inputValue)"
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
      label: null,
    };
  },
  computed: {
    slugName() {
      return this.name.toLowerCase().split(' ').join('-');
    },
  },
  methods: {
    ...mapActions('form', ['changeFormData']),
    handleKeyUp(value) {
      this.$store.dispatch('changeFormData', {
        label: this.label, name: this.name, slug: this.slugName, value,
      });
    },
  },
  mounted() {
    const label = this.name.split(' ');
    label[0] = label[0].toLowerCase();
    this.label = label.join('');
  },
};
</script>
