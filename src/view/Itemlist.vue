<template>
  <v-app id="inspire">
    <v-main class="item_main">
      <itemstable
        :Categories="Categories"
        :itemlist="itemlist"
        :Itemheaders="Itemheaders"
      ></itemstable>
    </v-main>
  </v-app>
</template>

<script>
import ItemsTable from "../components/ItemsTable.vue";
export default {
  props: ["Categories", "itemlist", "Itemheaders"],
  components: {
    itemstable: ItemsTable,
  },

  data: () => ({ drawer: null }),
};
</script>
<style scoped></style>
