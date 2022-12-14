<template>
  <div class="mainpage">
    <v-app id="inspire">
      <div class="sidebar">
        <v-navigation-drawer color="#22223a" v-model="drawer" app>
          <!-- side bar dropdown menu -->
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header color="#22223a">
                <v-hover color="white">
                  <span><h5>Item Category</h5></span></v-hover
                >
              </v-expansion-panel-header>

              <router-link to="/"
                ><v-expansion-panel-content color="#22223a">
                  All Categories
                </v-expansion-panel-content></router-link
              >

              <router-link to="/adddata" class="item_list"
                ><v-expansion-panel-content color="#22223a">
                  <p>Add New Categories</p>
                </v-expansion-panel-content></router-link
              >
            </v-expansion-panel>
          </v-expansion-panels>

          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header color="#22223a">
                <span><h5>Items</h5></span>
              </v-expansion-panel-header>

              <router-link to="/itemlist">
                <v-expansion-panel-content color="#22223a">
                  All Items
                </v-expansion-panel-content></router-link
              >

              <router-link to="/itemadd" class="item_list"
                ><v-expansion-panel-content color="#22223a">
                  <p>Add New Item</p>
                </v-expansion-panel-content></router-link
              >
            </v-expansion-panel>
          </v-expansion-panels>

          <!-- -->
        </v-navigation-drawer>
      </div>
      <v-app-bar app>
        <v-toolbar color="#22223a">
          <v-app-bar-nav-icon @click="drawer = !drawer" color="#fff"></v-app-bar-nav-icon>

          <v-toolbar-title><h4>inventory system</h4></v-toolbar-title></v-toolbar
        >
      </v-app-bar>
      <v-main>
        <router-view
          :Categories="Categories"
          :headers="headers"
          :itemlist="itemlist"
          :Itemheaders="Itemheaders"
          :items="items"
        ></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [],
    Categories: [
      {
        id: 1,
        name: "Footware",
        description: " carried or worn by a person....",
        status: "Active",
        Actions: "",
      },
      {
        id: 2,
        name: "Watch",
        description:
          "A watch is a portable timepiece intended to be carried or worn by a person....",
        status: "Active",
        Actions: "",
      },
      {
        id: 3,
        name: "Begs",
        description:
          "bag : a usually flexible container that may be closed for holding, ...",
        status: "Active",
        Actions: "",
      },
    ],

    itemlist: [
      {
        id: 1,
        name: "Timex watch",
        category: "watch",
        description: "A watch is a portable timepiece intended ....",
        price: 4000,
        status: "Active",
      },
      {
        id: 2,
        name: "sandle",
        category: "footware",
        description: " to be carried or worn by a person....",
        price: 500,
        status: "Active",
      },
    ],

    headers: [
      { text: "id", value: "id" },
      { text: "name", value: "name" },
      { text: "description", value: "description" },
      { text: "status", value: "status" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    Itemheaders: [
      { text: "id", value: "id" },
      { text: "name", value: "name" },
      { text: "category", value: "category" },
      { text: "description", value: "description" },
      { text: "price", value: "price" },
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
* {
  padding: 0;
  margin: 0;
    /* overflow:hidden !important; */
} 
.mainpage {
  padding: 0;
  font-family: "Open Sans", sans-serif;
}
a {
  font-family: "Open Sans", sans-serif;
  text-decoration: none !important;
  color: #000000;
}
.item_list {
  color: #000000;
}
.table_main {
  padding: 100px;
}
.v-main__wrap {
  flex: 1 1 auto;
  max-width: 100%;
  position: relative;
  padding: 20px;
}
.v-menu__content {
  min-width: 256px;
  top: 72px;
  left: 0px !important;
  transform-origin: left top;
  z-index: 8;
}
p {
  font-size: 16px;
  color: #fff;
}
.v-toolbar__content {
  align-items: center;
  display: flex;
  position: relative;
  z-index: 0;
}
.v-toolbar__content,
.v-toolbar__extension {
  padding: 4px !important;
}
h4 {
  color: #fff;
}
.v-list {
  background: #22223a !important;
  color: rgba(0, 0, 0, 0.87);
}
</style>
