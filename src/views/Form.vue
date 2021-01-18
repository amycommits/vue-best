<template>
  <div>
    <text-input name="Company Name"/>
    <text-input name="Company Industry"/>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import TextInput from '../components/FormFields/TextInput.vue';

export default {
  name: 'Form',
  components: {
    TextInput,
  },
  methods: {
    ...mapActions('form', ['clearForm']),
    clearForm() {
      this.$store.dispatch('clearForm');
    },
  },
  mounted() {
    this.clearForm();
  },
};
</script>
