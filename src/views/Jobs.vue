<template>
  <div class="jobs">
    <div v-if="isCreating">
      <input placeholder="title" v-model="title" type="text" />
      <input placeholder="description" v-model="description" type="text" />
      <input placeholder="location" v-model="location" type="text" />
      <select v-model="CompanyId">
        <option disabled value>Please select one</option>
        <option
          v-for="(company, index) in userCompanies"
          v-bind:key="index"
          v-bind:value="company.id"
        >{{company.name}}</option>
      </select>
      <input placeholder="type" v-model="type" type="text" />
      <button @click="createJob">Post Job</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jobs',
  components: {},
  props: {
    isCreating: Boolean,
  },
  data() {
    return {
      title: '',
      description: '',
      location: '',
      CompanyId: '',
      type: '',
    };
  },
  computed: {
    userCompanies() {
      return this.$store.getters.userCompanies;
    },
  },
  async beforeMount() {
    if (this.$store.getters.session) this.fetchUserCompanies();
  },
  methods: {
    async createJob() {
      const {
        data,
        data: { status, message },
      } = await this.$http.post('job/new', {
        title: this.title,
        token: this.$store.getters.session,
        description: this.description,
        location: this.location,
        type: this.type,
        CompanyId: this.CompanyId,
      });
      if (status !== 'error') {
        return this.$store.dispatch('addUserCompany', data);
      }
    },
    async fetchUserCompanies() {
      const { data } = await this.$http.get(
        `companies/user/${this.$store.getters.user.id}`,
      );
      this.$store.dispatch('setUserCompanies', data);
    },
  },
};
</script>

<style scoped>
</style>
