<template>
  <div id="app">
    <HeaderGuest v-if="session === undefined" />
    <HeaderUser v-if="session !== undefined" />
    <router-view />
  </div>
</template>

<script>
import HeaderGuest from '@/components/Header/HeaderGuest.vue';
import HeaderUser from '@/components/Header/HeaderUser.vue';

export default {
  name: 'app',
  components: {
    HeaderGuest,
    HeaderUser,
  },
  computed: {
    session() {
      return this.$store.getters.session;
    },
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
