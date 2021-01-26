<template>
  <div>
    <label :for="slugName">{{name}}</label>
    <input
      :name="slugName"
      :id="slugName"
      type="date"
      v-model="inputValue"
      @change="handleChange(inputValue)"
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
    handleChange(value) {
      console.log({
        label: this.label, name: this.name, slug: this.slugName, value,
      });
      this.$store.dispatch('changeFormData', {
        label: this.label, name: this.name, slug: this.slugName, value,
      });
    },
  },
  mounted() {
    const label = this.name.split(' ');
    label[0] = label[0].toLowerCase();
    this.label = label.join('');
    this.inputValue = new Date();
    this.handleChange(this.inputValue);
  },
};
</script>
