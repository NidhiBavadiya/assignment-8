<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!-- side bar dropdown menu -->
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="light"  v-bind="attrs" v-on="on" block> Item Category</v-btn>
          </template>
          <v-list>
            <v-list-item
              ><router-link to="/" class="item_list"
                >All Categories</router-link
              ></v-list-item
            >
            <v-list-item
              ><router-link to="/adddata" class="item_list"
                >Add New Categories
              </router-link></v-list-item
            >
          </v-list>
        </v-menu>
      </div>

      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="light" v-bind="attrs" v-on="on" block>Items </v-btn>
          </template>
          <v-list>
            <v-list-item
              ><router-link to="/itemlist" class="item_list">
                All Items</router-link
              ></v-list-item
            >
            <v-list-item
              ><router-link to="/itemadd" class="item_list"
                >Add New Item</router-link
              ></v-list-item
            >
          </v-list>
        </v-menu>
      </div>

      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>inventory system</v-toolbar-title>
    </v-app-bar>
    <v-main class="mainpage">
      <router-view
        :Categories="Categories"
        :headers="headers"
        :itemlist="itemlist"
        :Itemheaders="Itemheaders"
        :items="items"
      ></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [],
    Categories: [
      {
        id: 1,
        Name: "Footware",
        Description: " carried or worn by a person....",
        status: "Deactive",
        Actions: "",
      },
      {
        id: 2,
        Name: "Watch",
        Description:
          "A watch is a portable timepiece intended to be carried or worn by a person....",
        status: "Deactive",
        Actions: "",
      },
      {
        id: 3,
        Name: "Begs",
        Description:
          "bag : a usually flexible container that may be closed for holding, ...",
        status: "Deactive",
        Actions: "",
      },
    ],

    itemlist: [
      {
        id: 1,
        Name: "Timex watch",
        Category: "watch",
        Description:
          "A watch is a portable timepiece intended to be carried or worn by a person....",
        Price: 4000,
        status: "Active",
      },
      {
        id: 2,
        Name: "sandle",
        Category: "footware",
        Description: " to be carried or worn by a person....",
        Price: 500,
        status: "Deactive",
      },
    ],

    headers: [
      { text: "id", value: "id" },
      { text: "Name", value: "Name" },
      { text: "Description", value: "Description" },
      { text: "status", value: "status" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    Itemheaders: [
      { text: "id", value: "id" },
      { text: "Name", value: "Name" },
      { text: "Category", value: "Category" },
      { text: "Description", value: "Description" },
      { text: "Price", value: "Price" },
      { text: "status", value: "status" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  }),
  
  mounted() {
    localStorage.setItem("CategorieData", JSON.stringify(this.Categories));
    localStorage.setItem("Items", JSON.stringify(this.itemlist));
  },
};
</script>

<style scoped>
.mainpage {
  padding: 0;
}
a {
  text-decoration: none;
  color: #000000;
}
.item_list {
  color: #000000;
}
.v-toolbar__content, .v-toolbar__extension {
    align-items: center;
    display: flex;
    position: relative;
    z-index: 0;
    background-color: lavender;
}
</style>
