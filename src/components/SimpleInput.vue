<template>
  <div class="simple-input">
    <input v-model="inputValue"/>
    <div>
      <h2>{{inputValue}}</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SimpleInput',
  data() {
    return {
      inputValue: null,
    };
  },
};
</script>
