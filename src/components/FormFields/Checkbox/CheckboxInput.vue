<template>
  <div :class="`${name} checkbox-section`">
    <input
      :name="slugValue"
      :id="slugValue"
      type="checkbox"
      :value="value"
      @change="handleChange()"
      :checked="checkedValue"
    >
    <label :for="slugValue">{{value}}</label>
  </div>
</template>
<script>

import { mapGetters } from 'vuex';

export default {
  name: 'CheckboxInput',
  props: {
    name: String,
    value: String,
  },
  data() {
    return {
      checkedValue: false,
    };
  },
  computed: {
    ...mapGetters('form', ['data']),
    slugValue() {
      return this.value.toLowerCase().replaceAll(' ', '-');
    },

  },
  methods: {
    handleChange() {
      this.checkedValue = !this.checkedValue;
      const slugName = this.name.toLowerCase().replaceAll(' ', '-');

      if (this.checkedValue) {
        const doesCheckboxNameNotExist = !this.data[slugName];
        const doesValueNotExist = this.data[slugName]
          && !this.data[slugName].value.includes(this.value);
        if (doesCheckboxNameNotExist) {
          this.$store.dispatch('form/changeFormData', {
            label: slugName, name: this.name, slug: slugName, value: [this.value],
          });
        } else if (doesValueNotExist) {
          const value = Object.values(this.data[slugName].value);
          value.push(this.value);
          this.$store.dispatch('form/changeFormData', {
            label: slugName, name: this.name, slug: slugName, value,
          });
        }
      } else if (this.data[slugName]) {
        const existingValues = this.data[slugName];
        const value = Object.values(existingValues.value).filter((x) => x !== this.value);
        this.$store.dispatch('form/changeFormData', {
          label: slugName, name: this.name, slug: slugName, value,
        });
      }
    },
  },
};
</script>
