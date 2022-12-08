<template>
  <!-- this data for table display -->
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>
          <span class="text-h5">{{ TableTitle }}</span>
        </v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              AddItem
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <!-- display table data name id status etc.... -->
            <v-card-text>
              <!-- form..... -->
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <!-- id -->
                    <v-text-field v-model="editedItem.id" label="id"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <!-- name -->
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
                    <!-- <v-text-field
                      v-model="editedItem.Description"
                      label="  Description"
                    ></v-text-field> -->
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-switch v-model="editedItem.status"></v-switch>
                    <!-- <v-text-field
                      v-model="editedItem.status"
                      label="status"
                    ></v-text-field>  -->
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <!-- edit form save aur cancle button for edit data -->
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- card for the delete message sure value popups -->
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
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "id", value: "id" },
      { text: "Name", value: "Name" },
      { text: "Description", value: "Description" },
      { text: "status", value: "status" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    Table: -1,

    //blank array for add edit value...
    editedItem: {
      id: "",
      Name: "",
      Description: "",
      status: "Deactive",
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
    TableTitle() {
      return this.Table === -1 ? "All Categories" : "Items";
    },
  },

  // watch: {
  //   dialog(val) {
  //     val || this.close();
  //   },
  //   dialogDelete(val) {
  //     val || this.closeDelete();
  //   },
  // },

  created() {
    this.initialize();
  },
    mounted() {
    this.editedIndex.forEach((element) => {
      console.log(element.status);
      if (element.status == "Active") {
        element.status = true;
      } else {
        element.status = false;
      }
    });
    console.log(this.details);
  },

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
    // this for open edit form
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    //for delete item sure popup message display and ic ok them cancle value
    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
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
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
        localStorage.setItem("EditData", JSON.stringify(this.editedItem));
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
