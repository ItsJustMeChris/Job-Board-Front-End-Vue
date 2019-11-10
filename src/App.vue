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
  margin: 0 auto;
}
:root {
  --primary-color: #2D3A5C;
  --primary-green: #00D293;
  --primary-fade: rgba(45, 58, 92, 0.1);
  --primary-white: #ffffff;

  --secondary-color: #5E657E;
  --secondary-red: #FF0000;
  --secondary-orage: #FF834E;

}
</style>
