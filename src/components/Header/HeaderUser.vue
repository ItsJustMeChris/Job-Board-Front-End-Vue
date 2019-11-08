<template>
  <div class="header">
    <ul>
      <li class="flex-left">
        <router-link to="/">Flin</router-link>
      </li>
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
            <router-link to="/profile">{{user.name}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderGuest',
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style scoped>

ul {
  width: 100%;
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
</style>
