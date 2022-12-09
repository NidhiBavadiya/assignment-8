<template>
  <v-app id="inspire">
    <v-main class="item_main">
      <itemstable :Categories="Categories" :items="items"></itemstable>
    </v-main>
  </v-app>
</template>

<script>
import ItemsTable from "../components/ItemsTable.vue";
export default {
  props: ["headers", "Categories" ,"items"],
  components: {
    'itemstable': ItemsTable,
  },

  data: () => ({ drawer: null }),
};
</script>
<style scoped></style>
