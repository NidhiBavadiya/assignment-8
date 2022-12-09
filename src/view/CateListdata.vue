<template>
  <v-app id="inspire">
    <v-main class="table_main">
      <categories :Categories="Categories" :headers="headers"></categories>
    
    </v-main>
  </v-app>
</template>

<script>
import Categories from "../components/Categories.vue";

export default {
  props: ["headers", "Categories" ,"items"],
  components: {
    'categories': Categories,
  
  },

  data: () => ({ drawer: null }),
};
</script>
<style scoped></style>
