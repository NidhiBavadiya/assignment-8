<template>
  <div class="container">
    <v-app id="inspire">
      <div class="sidebar">
        <v-navigation-drawer v-model="drawer" app>
          <!-- side bar dropdown menu -->
          <v-expansion-panels >
            <v-expansion-panel>
              <v-expansion-panel-header>
                <h5>Item Category</h5>
              </v-expansion-panel-header>

              <router-link to="/"
                ><v-expansion-panel-content>
                  <p>All Categories</p>
                </v-expansion-panel-content></router-link
              >

              <router-link to="/adddata" class="item_list"
                ><v-expansion-panel-content>
                  <p>Add New Categories</p>
                </v-expansion-panel-content></router-link
              >
            </v-expansion-panel>
          </v-expansion-panels>

          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <h5>Items</h5>
              </v-expansion-panel-header>

              <router-link to="/itemlist">
                <v-expansion-panel-content>
                  <p>All Items</p>
                </v-expansion-panel-content></router-link
              >

              <router-link to="/itemadd" class="item_list"
                ><v-expansion-panel-content>
                  <p>Add New Item</p>
                </v-expansion-panel-content></router-link
              >
            </v-expansion-panel>
          </v-expansion-panels>

          <!-- -->
        </v-navigation-drawer>
      </div>
      <v-app-bar app>
        <v-toolbar>
          <v-app-bar-nav-icon @click="drawer = !drawer" color="#fff"></v-app-bar-nav-icon>

          <v-toolbar-title><h4>inventory system</h4></v-toolbar-title></v-toolbar
        >
      </v-app-bar>
      <v-main background="gray">
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import data from "../assets/data.json";
export default {
  data: () => ({
    drawer: null,
    data: data,
  }),

  mounted() {
    localStorage.setItem("CategorieData", JSON.stringify(this.data.Categories));
    localStorage.setItem("Items", JSON.stringify(this.data.itemlist));
  },
};
</script>
<style>
@import "../assets/style.css";
</style>
