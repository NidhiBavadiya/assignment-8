<template>
  <div class="mainpage">
    <v-app id="inspire">
      <div class="sidebar">
        <v-navigation-drawer v-model="drawer" app>
          <!-- side bar dropdown menu -->
          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="#fff" v-bind="attrs" v-on="on" block> Item Category</v-btn>
              </template>
              <v-list>
                <router-link to="/" class="item_list"
                  ><v-list-item><p>All Categories</p></v-list-item></router-link
                >
                <router-link to="/adddata" class="item_list"
                  ><v-list-item><p>Add New Categories</p></v-list-item></router-link
                >
              </v-list>
            </v-menu>
          </div>

          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="#fff" v-bind="attrs" v-on="on" block>Items </v-btn>
              </template>
              <v-list>
                <router-link to="/itemlist" class="item_list">
                  <v-list-item><p>All Items</p></v-list-item></router-link
                >

                <router-link to="/itemadd" class="item_list"
                  ><v-list-item><p>Add New Item</p></v-list-item></router-link
                >
              </v-list>
            </v-menu>
          </div>

          <!-- -->
        </v-navigation-drawer>
      </div>
      <v-app-bar app>
      <v-toolbar color="#BDBDBD">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title>inventory system</v-toolbar-title></v-toolbar>
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
        status: "Deactive",
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
.mainpage {
  padding: 0;
  font-family: "Open Sans", sans-serif;
}
a{
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
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
}
.v-toolbar__content, .v-toolbar__extension {
    align-items: center;
    display: flex;
    position: relative;
    z-index: 0;
    padding: 0 !important;
}

</style>
