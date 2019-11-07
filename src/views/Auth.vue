<template>
  <div class="auth">
    <div id="panel-menu">
      <button
        @click="action = 'login'"
        v-bind:class="{active: action==='login'}"
        class="panel-button"
        id="login"
      >Login</button>
      <button
        @click="action = 'register'"
        v-bind:class="{active: action==='register'}"
        class="panel-button"
        id="register"
      >Register</button>
      <Login v-if="action == 'login'" />
      <Register v-if="action == 'register'" />
    </div>
  </div>
</template>

<script>
import Login from '@/components/Auth/Login.vue';
import Register from '@/components/Auth/Register.vue';

export default {
  name: 'home',
  components: {
    Login,
    Register,
  },
  props: {
    action: String,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.auth {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
button.panel-button {
  width: 50%;
}
button {
  background: #e2e2e2;
  border: none;
  font-weight: 600;
  color: #949494;
  padding: 1em;
}

button.active {
  color: #ffffff;
  background: #518fff;
}
</style>
