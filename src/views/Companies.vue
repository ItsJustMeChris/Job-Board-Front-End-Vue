<template>
  <div class="companies">
    <div v-for="(company, index) in companies" v-bind:key="index">
      <p>{{company.name}}</p>
    </div>
    <p>Users Companies</p>
    <div v-for="(company, index) in userCompanies" v-bind:key="index">
      <p>{{company.name}}</p>
    </div>
    <input v-model="name" type="text" />
    <button @click="addCompany">Add Company</button>
  </div>
</template>

<script>
export default {
  name: 'companies',
  components: {},
  props: {},
  data() {
    return {
      name: '',
    };
  },
  computed: {
    companies() {
      return this.$store.getters.companies;
    },
    userCompanies() {
      return this.$store.getters.userCompanies;
    },
  },
  async beforeMount() {
    this.fetchCompanies();
    if (this.$store.getters.session) this.fetchUserCompanies();
  },
  methods: {
    async fetchCompanies() {
      const { data } = await this.$http.get('companies/all/0');
      this.$store.dispatch('setCompanies', data);
    },
    async fetchUserCompanies() {
      const { data } = await this.$http.get(
        `companies/user/${this.$store.getters.user.id}`,
      );
      this.$store.dispatch('setUserCompanies', data);
    },
    async addCompany() {
      const {
        data,
        data: { status, message },
      } = await this.$http.post('company/new', {
        name: this.name,
        token: this.$store.getters.session,
      });
      if (status === 'error') return console.log('Error Creating Company', status, message);
      return this.$store.dispatch('addUserCompany', data);
    },
  },
};
</script>

<style scoped>
</style>
