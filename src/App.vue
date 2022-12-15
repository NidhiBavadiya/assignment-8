<template>
  <v-app>
    <v-main>
     <sidebar></sidebar>
     </v-main>
  </v-app>
</template>

<script>

import SideBar from './view/SideBar.vue'
export default {
  name: "App",

   components:{
    "sidebar": SideBar,
    },

  data: () => ({
    //
  }),
};
</script>