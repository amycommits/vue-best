<template>
  <div>
    <label :for="slugName">{{name}}</label>
    <textarea
      :name="slugName"
      :id="slugName"
      :placeholder="name"
      v-model="inputValue"
      @keyup="handleKeyUp(inputValue)"
    />
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
    handleKeyUp(value) {
      this.$store.dispatch('form/changeFormData', {
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
