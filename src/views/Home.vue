<template>
  <div class="home">
    <input v-model="inputValue"/>
    <div>
      <h2>{{inputValue}}</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data() {
    return {
      inputValue: null,
    };
  },
};
</script>
