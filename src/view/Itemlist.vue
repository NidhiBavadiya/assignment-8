<template>
  <div id="itemlist">
    <v-app id="inspire">
      <v-main class="item_main">
        <itemstable></itemstable>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import ItemsTable from "../components/ItemsTable.vue";
export default {
  components: {
    itemstable: ItemsTable,
  },

  data: () => ({ drawer: null }),
};
</script>
