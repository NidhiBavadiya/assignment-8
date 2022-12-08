<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!-- side bar dropdown menu -->

      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="light" v-bind="attrs" v-on="on" block> Item Category</v-btn>
          </template>
          <v-list>
            <v-list-item><router-link to="/">All Categories</router-link></v-list-item>
            <v-list-item
              ><router-link to="/adddata">Add New Categories </router-link></v-list-item
            >
          </v-list>
        </v-menu>
      </div>

      <!-- <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="light" v-bind="attrs" v-on="on" block>Items </v-btn>
          </template>
          <v-list>
            <v-list-item><router-link to="/"> All Items</router-link></v-list-item>
            <v-list-item><router-link to="/adddata">Add New Item</router-link></v-list-item>
          </v-list>
        </v-menu>
      </div> -->

      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>inventory system</v-toolbar-title>
    </v-app-bar>
    <v-main class="mainpage">
      <router-view :desserts="desserts" :headers="headers"></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,

    desserts: [],

    headers: [
      { text: "id", value: "id" },
      { text: "Name", value: "Name" },
      { text: "Description", value: "Description" },
      { text: "status", value: "status" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  }),
};
</script>

<style scoped>
.mainpage {
  padding: 0;
}
</style>
