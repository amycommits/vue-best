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
    handleChange(value) {
      this.$store.dispatch('form/changeFormData', {
        label: this.label, name: this.name, slug: this.slugName, value,
      });
    },
    makeLabel() {
      const label = this.name.split(' ');
      label[0] = label[0].toLowerCase();
      this.label = label.join('');
    },
  },
  mounted() {
    this.makeLabel();
    this.inputValue = new Date();
    this.handleChange(this.inputValue);
  },
};
</script>
