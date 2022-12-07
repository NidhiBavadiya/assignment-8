<template>
  <v-app>
    <v-main>
      <listdata/>
       <categories></categories>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Listdata from './view/Listdata.vue'
 import Categories  from './components/Categories.vue'
export default {
  name: 'App',

  components: {
    "listdata":Listdata, "categories":Categories
  },

  data: () => ({
    //
  }),
};
</script>
