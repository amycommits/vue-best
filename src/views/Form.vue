<template>
  <div>
    <text-input name="Company Name"/>
    <text-input name="Job Title"/>
    <text-input name="Job Description"/>
    <date-input name="Date Applied" />
    <text-area name="First Impression" />
    <checkbox-wrapper name="Frontend" :options="frontendTechnologies" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import TextInput from '../components/FormFields/TextInput.vue';
import DateInput from '../components/FormFields/DateInput.vue';
import TextArea from '../components/FormFields/TextArea.vue';
import CheckboxWrapper from '../components/FormFields/Checkbox/Wrapper.vue';

export default {
  name: 'Form',
  components: {
    CheckboxWrapper,
    TextInput,
    DateInput,
    TextArea,
  },
  computed: {
    ...mapGetters(['frontendTechnologies']),
  },
  methods: {
    clearForm() {
      this.$store.dispatch('form/clearForm');
    },
  },
  mounted() {
    // this.clearForm();
  },
};
</script>
