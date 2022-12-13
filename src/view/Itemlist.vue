<template>
<div id="itemlist">
    <v-app id="inspire">
    <v-main class="item_main">
      <itemstable
        :Categories="Categories"
        :itemlist="itemlist"
        :Itemheaders="Itemheaders"
        :items="items"
      ></itemstable>
    </v-main>
  </v-app>
</div>
</template>

<script>
import ItemsTable from "../components/ItemsTable.vue";
export default {
  props: ["Categories", "itemlist", "Itemheaders","items"],
  components: {
    itemstable: ItemsTable,
  },

  data: () => ({ drawer: null }),
};
</script>
<style scoped>
.v-main__wrap {
    flex: 1 1 auto;
    max-width: 100%;
    position: relative;
    background-color:gray;
}
</style>
