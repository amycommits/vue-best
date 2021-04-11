<template>
  <div :class="`${name} checkbox-section`">
    <input :name="slug" :id="slug" type="checkbox" :value="value">
    <label :for="slug">{{value}}</label>
  </div>
</template>
<script>
export default {
  name: 'CheckboxInput',
  props: {
    name: String,
    value: String,
  },
  computed: {
    slug() {
      return this.value.toLowerCase().replace(' ', '-');
    },
  },
};
</script>
