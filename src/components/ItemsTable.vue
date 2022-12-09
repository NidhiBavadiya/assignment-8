<template>
<!-- display table for items -->
  <v-data-table
    :headers="Itemheaders"
    :items="itemlist"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>All Items</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
        <!-- add item button -->
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="light" dark class="mb-2" v-bind="attrs" v-on="on">
             <router-link to = "/itemadd" class="btn_design"> New Item</router-link>
            </v-btn>
          </template>
          <!-- form for add and edit data... -->
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <!-- id -->
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.id" label="id"></v-text-field>
                  </v-col>
                  <!-- name -->
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.name"
                      label="item name"
                    ></v-text-field>
                  </v-col>
                  <!-- category -->
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-select
                      :Categories="Categories"
                      label="category"
                      v-model="editedItem.category"
                      Standard
                    ></v-select>
                  </v-col>
                  <!-- description -->
                  <v-col cols="12" sm="6" md="4">
                    <v-textarea
                      solo
                      v-model="editedItem.Description"
                      name="Description"
                      :rules="DescriptionRules"
                      :counter="100"
                      label="Description"
                    ></v-textarea
                  ></v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.price"
                      prefix="$"
                      label="price"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-switch v-model="editedItem.status">
                     <span>{{ value }}</span>
                      </v-switch
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
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
</template>

<script>
export default {
  props: ["Categories", "itemlist", "Itemheaders"],
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
    value() {
      return this.status === true ? "Active" : "deactive";
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
  // this for swich data value change
  //   filters: {
  //     changevalue: function (value) {
  //       console.log(value);
  //       return value == true ? "Active" : "Deactive";
  //     },
  //   },
  mounted() {
    const ItemValue = localStorage.getItem("Items");
    console.log(ItemValue);
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.itemlist.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      const EditValue = localStorage.getItem("EditData");
      console.log(EditValue);
    },
    toggle(){
        
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
        localStorage.setItem("EditData", JSON.stringify(this.editedItem));
      } else {
        this.itemlist.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
<style>
.v-data-footer {
  display: none !important;
}
.btn_design{
    text-decoration:none;
    color:#ffffff;
}
</style>
