<template>
  <v-app id="inspire">
    <v-main>
      <categories></categories>
    </v-main>
  </v-app>
</template>

<script>
import Categories  from '../components/Categories.vue'
export default {
  props: ["headers", "desserts"],
  components: {
    "categories":Categories
  },

  data: () => ({ drawer: null }),
};
</script>
<style scoped>
.v-menu__content--fixed {
  min-width: 256px;
  top: 41px;

  transform-origin: left top;
  z-index: 8;
}
</style>
