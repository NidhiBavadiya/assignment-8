<template>
  <div id="category">
    <v-app id="inspire">
      <v-main class="table_main">
        <categories></categories>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Categories from "../components/Categories.vue";

export default {
  components: {
    categories: Categories,
  },

  data: () => ({ drawer: null }),
};
</script>
