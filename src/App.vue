<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="light" block v-bind="attrs" v-on="on"> Item Category </v-btn>
          </template>
          <v-list>
            <v-list-item >All Categories
              <!-- <v-list-item-title>All Categories{{ header.Name }}</v-list-item-title> -->
            </v-list-item>
               <v-list-item>Add New Category
              <!-- <v-list-item-title>Add New Category{{ header.Name }}</v-list-item-title> -->
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="light" block v-bind="attrs" v-on="on"> Item </v-btn>
          </template>
          <v-list>
            <v-list-item>All Items
           
            </v-list-item>
             <v-list-item >Add New Item
        
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <!--button for open side bar  -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>inventory system</v-toolbar-title>
    </v-app-bar>

    <v-main>
    <router-view></router-view>
   
    </v-main>
  </v-app>
</template>




<script>

export default {
  name: 'App',

  // components: {
  //   "listdata":Listdata,
  //    "addedit":AddEdit,
  // },

  data: () => ({
      headers: [
      { text: "id", value: "id" },
      { text: "Name", value: "Name" },
      { text: "Description", value: "Description" },
      { text: "status", value: "status" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  }),

  methods: {
      initialize() {
      this.desserts = [
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
      ];
    },
  },
};
</script>
