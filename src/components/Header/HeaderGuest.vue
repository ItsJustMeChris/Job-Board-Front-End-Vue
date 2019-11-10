<template>
  <div class="header">
    <ul>
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
      <div class="flex-right menu-icon">
        <i class="fas fa-bars"></i>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderGuest',
};
</script>

<style scoped>
.header {
  border-bottom: 2px solid #eee;
  padding-left: 5em;
  padding-right: 5em;
}
ul {
  display: flex;
  justify-content: space-between;
  width: 100%;
  list-style-type: none;
  padding: 0;
}

li {
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

@media only screen and (max-width: 900px) {
  .header ul li {
    display: none;
  }
  .menu-icon {
    display: inline-block;
  }

}
</style>
