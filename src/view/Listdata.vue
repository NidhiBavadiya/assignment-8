<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
   <a href="#">Item Category</a> <br>
     <a href="#">Items</a>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <h1>shfjf</h1>
      <!-- <categories></categories> -->
    </v-main>
  </v-app>
</template>

<script>
// import Categories  from './components/Categories.vue'
  export default {

    component:{
      // "categories":Categories
    },

    data: () => ({ drawer: null }),
  }
</script>
