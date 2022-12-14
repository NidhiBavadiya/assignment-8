<template>
<div id="category">
    <v-app id="inspire">
    <v-main class="table_main">
      <categories
        :Categories="Categories"
        :headers="headers"
        :itemlist="itemlist"
      ></categories>
    </v-main>
  </v-app>
</div>
</template>

<script>
import Categories from "../components/Categories.vue";

export default {
  props: ["headers", "Categories", "itemlist"],
  components: {
    categories: Categories,
  },

  data: () => ({ drawer: null }),
};
</script>
<style scoped>

.table_main{
  height:100%;
}
.v-main__wrap {
  flex: 1 1 auto;
  max-width: 100%;
  position: relative;
  padding: 20px;
}
</style>
