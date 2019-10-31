<template>
  <div id="app">
    <HeaderGuest />
    <router-view />
  </div>
</template>

<script>
import HeaderGuest from '@/components/Header/HeaderGuest.vue';

export default {
  name: 'app',
  components: {
    HeaderGuest,
  },
};
</script>

<style>
body,
html {
  padding: 0;
  font-family: 'Karla', sans-serif;
  display: block;
  width: 90%;
  margin: 0 auto;
}
</style>
