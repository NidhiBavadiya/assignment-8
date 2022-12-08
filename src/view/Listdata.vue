<template>
  <v-app id="inspire">
    <v-main class="table_main">
      <categories :desserts="desserts" :headers="headers"></categories>
    </v-main>
  </v-app>
</template>

<script>
import Categories from "../components/Categories.vue";
export default {
  props: ["headers", "desserts"],
  components: {
    categories: Categories,
  },

  data: () => ({ drawer: null }),
};
</script>
<style scoped></style>
