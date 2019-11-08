<template>
  <div class="company-card" v-bind:key="index">
    <img class="company-image" :src="company.image" />
    <p>{{company.name}}</p>
    <p>{{company.description}}</p>
  </div>
</template>

<script>
export default {
  name: 'companycard',
  components: {},
  props: { company: String },
  computed: {},

  methods: {},
};
</script>

<style scoped>
img.company-image {
  object-fit: cover;
  width: 20em;
}

div.company-card {
  border: 1px solid #333;
  padding: 1em;
}
</style>
