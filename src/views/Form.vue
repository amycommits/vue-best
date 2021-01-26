<template>
  <div>
    <text-input name="Company Name"/>
    <text-input name="Job Title"/>
    <text-input name="Job Description"/>
    <date-input name="Date Applied" />
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import TextInput from '../components/FormFields/TextInput.vue';
import DateInput from '../components/FormFields/DateInput.vue';

export default {
  name: 'Form',
  components: {
    TextInput,
    DateInput,
  },
  methods: {
    ...mapActions('form', ['clearForm']),
    clearForm() {
      this.$store.dispatch('clearForm');
    },
  },
  mounted() {
    // this.clearForm();
  },
};
</script>
