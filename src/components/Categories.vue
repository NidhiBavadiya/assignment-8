<template>
  <!-- this data for table display -->
  <v-data-table
    :headers="headers"
    :items="Categories"
    disable-pagination="false"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title> All Categories </v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="light" dark class="mb-2" v-bind="attrs" v-on="on">
              <router-link to="/adddata" class="btn_design"> AddItem </router-link>
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <!-- display table data name id status etc....  -->
            <v-card-text>
              <!-- form.....  -->
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    id
                    <v-text-field v-model="editedItem.id" label="id"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    name
                    <v-text-field v-model="editedItem.Name" label="Name"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-textarea
                      solo
                      v-model="editedItem.Description"
                      name="Description"
                      :rules="DescriptionRules"
                      :counter="100"
                      label="Description"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-switch v-model="editedItem.status"> </v-switch>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <!-- edit form save aur cancle button for edit data  -->
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!--card for the delete message sure value popups -->
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!--  -->
      </v-toolbar>
    </template>
    <!--action button code -->
    <template v-slot:item.actions="{ item }">
      <!-- edit button -->
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <!-- delete button -->
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: ["Categories", "headers"],
  data: () => ({
    dialog: false,
    dialogDelete: false,
    editedIndex: -1,
    Table: -1,

    //blank array for add edit value...
    editedItem: {
      id: "",
      Name: "",
      Description: "",
      status: "",
      Actions: "",
    },
    defaultItem: {
      id: "",
      Name: "",
      Description: "",
      status: "",
      Actions: "",
    },
  }),

  // for the form which form open add item aur edit item
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

  //this for swich data value change
  // filters: {
  //   changevalue: function (value) {
  //     console.log(value);
  //     return value == true ? "Active" : "Deactive";
  //   },
  // },

  mounted() {
    const CateValue = localStorage.getItem("CategorieData");
    console.log(CateValue);
  },
  methods: {
    // this for open edit form
    editItem(item) {
      this.editedIndex = this.Categories.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      const EditValue = localStorage.getItem("EditData");
      console.log(EditValue);
    },
    //for delete item sure popup message display and ic ok them cancle value
    deleteItem(item) {
      this.editedIndex = this.Categories.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.Categories.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    //this method for cancle edit data
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    //after delete popup was close for that
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    //this method for save edit data
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.Categories[this.editedIndex], this.editedItem);

        localStorage.setItem("EditData", JSON.stringify(this.editedItem));
      } else {
        this.Categories.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
<style scoped>
.v-data-footer {
  display: none !important;
}
.btn_design {
  text-decoration: none;
  color: #ffffff;
}
/* .v-main {
  padding: 61px 17px 0 148px !important ;
} */
</style>
