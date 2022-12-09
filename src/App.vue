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
            <v-list-item><router-link to="/" class="item_list">All Categories</router-link></v-list-item>
            <v-list-item
              ><router-link to="/adddata"  class="item_list">Add New Categories </router-link></v-list-item
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
            <v-list-item><router-link to="/itemlist"  class="item_list"> All Items</router-link></v-list-item>
            <v-list-item><router-link to="/itemadd"  class="item_list">Add New Item</router-link></v-list-item>
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
      <router-view :Categories="Categories" :headers="headers" :items="items" ></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,

    Categories : [
        {
          id: 1,
          Name: "footware",
          Description: " carried or worn by a person....",
          status: "active",
          Actions: "",
        },
        {
          id: 2,
          Name: "watch",
          Description:
            "A watch is a portable timepiece intended to be carried or worn by a person....",
          status: "active",
          Actions: "",
        },
      ],

      items : [
        {
          id: 1,
          name: "Timex watch",
          category: "watch",
          description:
            "A watch is a portable timepiece intended to be carried or worn by a person....",
          price: 4000,
          status: "active",
        },
      ],

      // items:[

      // ],

    headers: [
      { text: "id", value: "id" },
      { text: "Name", value: "Name" },
      { text: "Description", value: "Description" },
      { text: "status", value: "status" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  }),
  methods: {
    
    // Categories(){
    //   this.Categories.push(this.Categories)
    //      localStorage.setItem("All_Categories", JSON.stringify(this.Categories));
    // },
    // Items(){

    // },
  },
};
</script>

<style scoped>
.mainpage {
  padding: 0;
}
a{
  text-decoration:none;
    color: #000000;
}
.item_list{
    color: #000000;
}

</style>
