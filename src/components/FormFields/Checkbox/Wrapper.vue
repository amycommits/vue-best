<template>
  <div :class="`${name} checkbox-wrapper`">
    <checkbox-input v-for="(value, i) in options" :key="i" :name="name" :value="value" />
  </div>
</template>
<script>
import CheckboxInput from './CheckboxInput.vue';

export default {
  name: 'CheckboxWrapper',
  props: {
    name: String,
    options: Array,
  },
  components: {
    CheckboxInput,
  },
};
</script>
