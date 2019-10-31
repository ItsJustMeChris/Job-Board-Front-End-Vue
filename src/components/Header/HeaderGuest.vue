<template>
  <div class="header">
    <ul>
      <li class="flex-left">
        <router-link to="/">Company Logo</router-link>
      </li>
      <li class="flex-middle">
        <ul>
          <li>
            <a href="/jobs">Jobs</a>
          </li>
          <li>
            <a href="/companies">Companies</a>
          </li>
          <li>
            <a href="/jobs/new">Post a Job</a>
          </li>
          <li>
            <a href="/resumes">Resume Search</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
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
  margin: 2em 15em 2em 15em;
}
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
