<template>
  <div class="home">
    <div id="jobs">
      <p class="center-text">Browse over {{jobCount}} Live Jobs from {{companyCount}} companies</p>
      <p class="center-text" id="quote">Your job search, just got better</p>
      <div id="search">
        <input placeholder="Search for a job" id="search-job" type="text" />
        <input placeholder="Location" id="search-location" type="text" />
        <button id="search-button">Search</button>
      </div>
    </div>
    <div id="job-cards">
      <h1>Newest Jobs</h1>
      <div v-for="(job, index) in jobs" v-bind:key="index" class="job-card">
        <img class="company-logo" :src="job.Company.image" alt />
        <div class="company-info">
          <p class="job-title">{{job.title}}</p>
          <span class="company-name">{{job.Company.name}}</span>
          <span class="company-location">{{job.location}}</span>
        </div>
        <div class="listing-info">
          <span class="tag">{{job.type}}</span>
          <span class="posted">{{stampToPrettyDate(job.createdAt)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  async beforeMount() {
    this.fetchCompanyCount();
    this.fetchJobCount();
    this.fetchJobs();
  },
  computed: {
    jobCount() {
      return this.$store.getters.jobCount;
    },
    companyCount() {
      return this.$store.getters.companyCount;
    },
    jobs() {
      return this.$store.getters.jobs;
    },
  },
  methods: {
    async fetchJobCount() {
      const {
        data: { count },
      } = await this.$http.get('jobs/count');
      this.$store.dispatch('setJobCount', count);
    },
    async fetchJobs() {
      const { data } = await this.$http.get('jobs/all/0');
      this.$store.dispatch('setJobs', data);
    },
    async fetchCompanyCount() {
      const {
        data: { count },
      } = await this.$http.get('companies/count');
      this.$store.dispatch('setCompanyCount', count);
    },
    stampToPrettyDate(date) {
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      const d = new Date(date);
      return `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    },
  },
};
</script>

<style scoped>
div#jobs {
  margin-top: 1em;
  height: 300px;
  display: flex;
  border-radius: 1em;
  place-content: center;
  flex-direction: column;
  background: #fff url('../assets/map.png');
  background-size: cover;
  align-items: center;
}
.center-text {
  text-align: center;
}
p {
  margin: 0 auto;
  color: #000;
  font-size: 1.6em;
}
p#quote {
  font-size: 1em;
}

div#job-cards {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  margin-top: 8em;
}

.job-card {
  display: flex;
  justify-content: space-between;
  padding-top: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #dadada;
}

img.company-logo {
  height: 40px;
  width: 40px;
  border: 1px solid #f5f5f5;
  border-radius: 1em;
  padding: 0.5em;
  object-fit: cover;
}

.company-info {
  width: 75%;
}
div#search {
  margin: 1em;
  display: flex;
  justify-self: center;
  width: fit-content;
}
#search input {
  border: 3px solid var(--primary-fade);
  padding: 0.2em;
  height: 2em;
  border-radius: 0.2em;
  margin-right: 1em;
}
#search button {
  border: none;
  background: var(--primary-green);
  color: var(--primary-white);
  width: 10em;
  font-weight: 900;
  border-radius: 0.2em;
}
p.job-title {
  color: #696969;
  font-size: 2em;
}

span.company-name {
  color: #a7a7a7;
  font-size: 1em;
  margin-right: 2em;
}

span.company-location {
  color: #a7a7a7;
  font-size: 1em;
}
span.tag {
  padding: 0.5em;
  border-radius: 0.2em;
  text-align: center;
  font-weight: bold;
  color: #ffffff;
  background: #94f3ff;
  max-width: 7em;
}
.listing-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

span.posted {
  color: #a7a7a7;
  font-size: 1em;
}

@media only screen and (max-width: 900px) {
  div#search {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  div#job-cards {
    width: 90%;
  }
  .company-info {
    display: flex;
    flex-direction: column;
  }
  #search {
    flex-direction: row;
  }
  #search input {
    margin-right: 0;
    margin-bottom: 0.5em;
  }
  #search button {
    width: 100%;
    height: 3em;
  }
}
</style>
