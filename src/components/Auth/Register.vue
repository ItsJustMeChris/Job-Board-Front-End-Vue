<template>
  <div id="panel-content">
    <label for="name">Name</label>
    <input v-model="name" id="name" placeholder="Name" type="text" />
    <label for="email2">Email</label>
    <input v-model="email" id="email2" placeholder="Email" type="text" />
    <label for="password2">Password</label>
    <input
      v-bind:class="{match: password === password2 && password !== '' && password2 !== '',
          nomatch: password !== password2 && password !== '' && password2 !== ''}"
      id="password2"
      v-model="password"
      placeholder="Password"
      type="password"
    />
    <label for="password3">Verify Password</label>
    <input
      v-bind:class="{match: password === password2 && password !== '' && password2 !== '',
          nomatch: password !== password2 && password !== '' && password2 !== ''}"
      v-model="password2"
      id="password3"
      placeholder="Verify Password"
      type="password"
    />
    <button
      @click="register"
      v-bind:class="{
          active: password === password2 &&
          password !== '' &&
          password2 !== '' &&
          name !== '' &&
          email !== ''
        }"
      id="auth-button"
    >Sign Up</button>
  </div>
</template>

<script>
export default {
  name: 'register',
  components: {},
  props: {},
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password2: '',
    };
  },
  methods: {
    async register() {
      const {
        data: { status, token, user },
      } = await this.$http.post('auth/register', {
        email: this.email,
        password: this.password,
        name: this.name,
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
  border: 1px solid #dddddd;
  padding: 0.2em;
  border-radius: 0.2em;
}
div#panel-content {
  display: flex;
  flex-direction: column;
}
button {
  background: #e2e2e2;
  border: none;
  font-weight: 600;
  color: #949494;
  padding: 1em;
  width: 100%;
  margin-top: 1em;
}
button.active {
  color: #ffffff;
  background: #518fff;
}
input.match {
  border: 1px solid #00a97a;
  color: #00a97a;
}

input.nomatch {
  color: #a20000;
  border: 1px solid #a20000;
}
</style>
