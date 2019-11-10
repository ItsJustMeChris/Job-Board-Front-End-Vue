<template>
  <div class="header">
    <ul id="desktop-nav">
      <router-link class="flex-left" to="/">Flin</router-link>
      <li class="flex-middle">
        <ul>
          <li>
            <router-link to="/jobs">Jobs</router-link>
          </li>
          <li>
            <router-link to="/companies">Companies</router-link>
          </li>
          <li>
            <router-link to="/jobs/new">Post a Job</router-link>
          </li>
          <li>
            <router-link to="/resumes">Resume Search</router-link>
          </li>
          <li>
            <router-link to="/pricing">Pricing</router-link>
          </li>
        </ul>
      </li>
      <li class="flex-right">
        <ul>
          <li>
            <router-link to="/login">Login</router-link>
          </li>
          <li>
            <router-link to="/register">Sign Up</router-link>
          </li>
        </ul>
      </li>
      <div @click="mobileMenu = true" class="flex-right menu-icon">
        <i class="fas fa-bars"></i>
      </div>
    </ul>
    <ul v-if="mobileMenu" id="mobile-nav">
      <i @click="mobileMenu = false;" class="fas fa-times mobile-nav-close"></i>
      <li @click="mobileMenu = false;">
        <router-link to="/jobs">Jobs</router-link>
      </li>
      <li @click="mobileMenu = false;">
        <router-link to="/companies">Companies</router-link>
      </li>
      <li @click="mobileMenu = false;">
        <router-link to="/jobs/new">Post a Job</router-link>
      </li>
      <li @click="mobileMenu = false;">
        <router-link to="/resumes">Resume Search</router-link>
      </li>
      <li @click="mobileMenu = false;">
        <router-link to="/pricing">Pricing</router-link>
      </li>
      <li @click="mobileMenu = false;">
        <router-link to="/login">Login</router-link>
      </li>
      <li @click="mobileMenu = false;">
        <router-link to="/register">Sign Up</router-link>
      </li>
    </ul>
    <div class="fullscreen" @click="mobileMenu=false" v-if="mobileMenu"></div>
  </div>
</template>

<script>
export default {
  name: 'HeaderGuest',
  data() {
    return {
      mobileMenu: false,
    };
  },
};
</script>

<style scoped>
.fullscreen {
  height: 100vh;
  width: 100vw;
  position: fixed;
  background: #0000004d;
  margin: 0 auto;
  padding: 0;
  top: 0;
  z-index: 88;
  right: 0;
}
.header {
  border-bottom: 2px solid #eee;
  padding-left: 5em;
  padding-right: 5em;
}
ul#desktop-nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  list-style-type: none;
  padding: 0;
}

ul#desktop-nav li {
  display: inline-block;
  margin: 0 10px;
}

.flex-left,
.flex-right {
  font-weight: bold;
}

a {
  text-decoration: none;
  color: #404040;
}
.menu-icon {
  display: none;
}

ul#mobile-nav {
  right: -310px;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  position: fixed;
  background: var(--primary-color);
  height: calc(97vh);
  top: 0;
  width: 270px;
  padding-left: 2em;
  padding-top: 3vh;
  z-index: 9999;
  animation: slide 0.5s forwards;
}

ul#mobile-nav li a {
  color: #fff;
  font-size: 1.3em;
}

.mobile-nav-close {
  text-align: right;
  color: #fff;
  margin-right: 2em;
  font-size: 1.5em;
}

@keyframes slide {
  100% {
    right: 0px;
  }
}

@media only screen and (max-width: 900px) {
  .header ul#desktop-nav li {
    display: none;
  }
  .menu-icon {
    display: inline-block;
  }
}
</style>
