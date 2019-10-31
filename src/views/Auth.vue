<template>
  <div class="auth">
    <div id="panel-menu">
      <button class="panel-button active" id="login">Login</button>
      <button class="panel-button" id="register">Register</button>
    </div>
    <div id="panel-content" v-if="action=='login'">
      <label for="email">Email</label>
      <input v-model="email" id="email" placeholder="Email" type="text" />
      <label for="password">Password</label>
      <input v-model="password" id="password" placeholder="Password" type="password" />
    </div>
    <div id="panel-content" v-if="action=='register'">
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
    </div>
    <button
      v-bind:class="{
          active: password !== '' &&
          email !== ''
        }"
      v-if="action=='login'"
      id="auth-button"
    >Sign In</button>
    <button
      v-bind:class="{
          active: password === password2 &&
          password !== '' &&
          password2 !== '' &&
          name !== '' &&
          email !== ''
        }"
      v-if="action=='register'"
      id="auth-button"
    >Sign Up</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  props: {
    action: String,
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password2: '',
    };
  },
};
</script>

<style scoped>
.auth {
  width: 250px;
  height: 350px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -125px 0 0 -175px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
div#panel-menu {
  display: flex;
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

input.match {
  border: 1px solid #00a97a;
  color: #00a97a;
}

input.nomatch {
  color: #a20000;
  border: 1px solid #a20000;
}
</style>
