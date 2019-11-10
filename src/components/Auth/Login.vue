<template>
  <div class="panel-content">
    <label for="email">Email</label>
    <input v-model="email" id="email" placeholder="Email" type="text" />
    <label for="password">Password</label>
    <input v-model="password" id="password" placeholder="Password" type="password" />
    <button
      @click="login"
      v-bind:class="{
          active: password !== '' &&
          email !== ''
        }"
    >Sign In</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  props: {},
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const {
        data: { token, status, user },
      } = await this.$http.post('auth/login', {
        email: this.email,
        password: this.password,
      });
      if (status === 'success') {
        this.$store.dispatch('setSession', token);
        this.$store.dispatch('setUser', user);
        this.$router.push('/');
      }
    },
  },
};
</script>

<style scoped>
input {
  display: block;
  font-size: 1.4em;
  border: 1px solid var(--primary-fade);
  padding: 0.2em;
  border-radius: 0.2em;
}
div#panel-content {
  display: flex;
  flex-direction: column;
}
button {
  background: var(--primary-fade);
  border: none;
  font-weight: 600;
  color: var(--secondar-color);
  padding: 1em;
  width: 100%;
  margin-top: 1em;
}
button.active {
  color: #ffffff;
  background: var(--primary-green);
}
input.match {
  border: 1px solid var(--primary-green);
  color: var(--primary-green);
}
input.nomatch {
  color: var(--secondary-red);
  border: 1px solid var(--secondary-red);
}
</style>
