<template>
  <div class="container">
    <!-- display table for items -->
    <v-data-table :headers="Itemheaders" :items="itemlist" class="elevation-1 mytable">
      <template v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item.name">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.price }}</td>
            <td>
              {{
                item.status == true
                  ? "Active"
                  : item.status == false
                  ? "Deactive"
                  : item.status == "Active"
                  ? "Active"
                  : item.status == "Deactive"
                  ? "Deactive"
                  : ""
              }}
            </td>
            <td>
              <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
              <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
            </td>
          </tr>
        </tbody>
      </template>

      <template v-slot:top>
        <v-toolbar class="table_title" flat>
          <v-toolbar-title><h3>All Items</h3></v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <!-- add item button -->
            <template v-slot:activator="{ on, attrs }">
              <router-link to="/itemadd" class="btn_design"
                ><v-btn color="#22223a" dark class="mb-2" v-bind="attrs" v-on="on">
                  New Item
                </v-btn></router-link
              >
            </template>
            <!-- form for add and edit data... -->
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">
                Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: ["Categories", "itemlist", "Itemheaders", "items"],
  data: () => ({
    dialog: false,
    dialogDelete: false,

    editedIndex: -1,
    editedItem: {
      id: "",
      name: "",
      category: "",
      description: "",
      price: "",
      status: "",
      Actions: "",
    },
    defaultItem: {
      id: "",
      name: "",
      category: "",
      description: "",
      price: "",
      status: "",
      Actions: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  mounted() {
    //get value
    const ItemValue = localStorage.getItem("Items");
    console.log(ItemValue);

    this.Categorycheck();
  },
  methods: {
    Categorycheck: function () {
      this.items = [];
      this.Categories.forEach((element) => {
        console.log(element.status);
        console.log(element.name);
        if (element.status === true) {
          return element.name;
        }
        console.log(element.name);
        this.items.push(element.name);
      });
    },

    editItem(item) {
      this.editedIndex = this.itemlist.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      const EditValue = localStorage.getItem("EditData");
      console.log(EditValue);
    },

    deleteItem(item) {
      this.editedIndex = this.itemlist.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.itemlist.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.itemlist[this.editedIndex], this.editedItem);
        localStorage.setItem("Items", JSON.stringify(this.itemlist));
      } else {
        this.itemlist.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

h2 {
  font-family: "Open Sans", sans-serif;
}
.mytable table tr {
  background-color: white;
  border: 1px solid black;
}
h3 {
  font-family: "Open Sans", sans-serif;
  font-size: 35px;
  color: #22223a;
}
.v-data-table th {
  background-color: #22223a; /*  #1d1e22 */
  border: 1px solid #e0e0e0;
  border-bottom: 1px solid black;
}
.mytable table td {
  background-color: white;
  border: 1px solid #e0e0e0;
}
.v-data-footer {
  display: none !important;
}
.btn_design {
  text-decoration: none;
  color: #ffffff;
}
span {
  font-size: 16px;
  color: #fff;
}
.v-application a {
  color: #ffffff;
}
.table_title {
  margin: 0px 0 30px 0;
}
.v-application a {
  color: #ffffff !important;
}
</style>
