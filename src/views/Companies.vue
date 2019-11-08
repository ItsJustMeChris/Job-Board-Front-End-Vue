<template>
  <div>
    <div v-if="$store.getters.session">
      <input v-model="name" placeholder="Company Name" type="text" />
      <input v-model="description" placeholder="Company Description" type="text" />
      <input v-model="image" placeholder="Company Image URL" type="text" />
      <button @click="addCompany">Add Company</button>
    </div>
    <div class="companies">
      <CompanyCard v-for="(company, index) in companies" v-bind:key="index" :company="company" />
    </div>
  </div>
</template>

<script>
import CompanyCard from '@/components/Company/Card.vue';

export default {
  name: 'companies',
  components: {
    CompanyCard,
  },
  props: {},
  data() {
    return {
      name: '',
      description: '',
      image: '',
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
        data: { status },
      } = await this.$http.post('company/new', {
        name: this.name,
        description: this.description,
        image: this.image,
        token: this.$store.getters.session,
      });
      if (status !== 'error') {
        return this.$store.dispatch('addUserCompany', data);
      }
    },
  },
};
</script>

<style scoped>
.companies {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1 33%;
  justify-content: space-between;
}
</style>
