<template>
  <div class="container">
    <!-- this data for table display -->
    <v-data-table
      :headers="data.headers"
      :items="data.Categories"
      disable-pagination="false"
      class="elevation-1 mytable"
    >
      <template v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item.name">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
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
          <v-toolbar-title><h3>All Categories</h3> </v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px" class="rounded-pill">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="#22223a" dark class="mb-2" v-bind="attrs" v-on="on">
                <router-link to="/adddata" class="btn_design"> Add-Category</router-link>
              </v-btn>
              <!-- <v-btn color="#22223a" dark class="mb-2" v-bind="attrs" v-on="on">
                Add-Category
              </v-btn> -->
            </template>

            <v-card>
              <v-card-title class="formtitle">
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
              <!-- display table data name id status etc....  -->
              <v-card-text class="formdisplay">
                <!-- form for edit.....  -->
                <v-container>
                  <v-row class="justify-content-around">
                    <!-- id -->
                    <v-col cols="12" sm="6" md="6" class="idvalue">
                      id
                      <v-text-field
                        v-model="editedItem.id"
                        :rules="idRules"
                        filled
                        shaped
                      ></v-text-field>
                    </v-col>
                    <!-- name -->
                    <v-col cols="12" sm="6" md="6">
                      name
                      <v-text-field v-model="editedItem.name"></v-text-field>
                    </v-col>
                    <!-- description -->
                    <v-col cols="12" sm="6" md="12">
                      <label for="">description</label>
                      <v-textarea
                        solo
                        v-model="editedItem.description"
                        :rules="descriptionRules"
                        :counter="100"
                        label="description"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                  <!-- toggle switch -->
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-switch v-model="editedItem.status"> </v-switch>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <!-- edit form save aur cancle button for edit data  -->
              <v-card-actions class="justify-content-center">
                <v-spacer></v-spacer>
                <v-btn class="btn" color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn class="btn" color="blue darken-1" text @click="save"> Save </v-btn>
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
  </div>
</template>

<script>
import data from "../assets/data.json";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    editedIndex: -1,
    //json array object
    data: data,

    //blank array for add edit value...
    editedItem: {
      id: "",
      name: "",
      description: "",
      status: "",
      Actions: "",
    },
    defaultItem: {
      id: "",
      name: "",
      description: "",
      status: "",
      Actions: "",
    },

    idRules: [
      (v) => !!v || "id is required",
      (v) => Number.isInteger(Number(v)) || "The value must be an integer number",
    ],
    descriptionRules: [
      (v) => !!v || "Description is required",
      (v) => v.length <= 100 || "Description must be less than 100 characters",
    ],
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

  mounted() {
    const CateValue = localStorage.getItem("CategorieData");
    console.log(CateValue);
  },

  methods: {


    // this for open edit form
    editItem(item) {
      this.editedIndex = this.data.Categories.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      const EditValue = localStorage.getItem("EditData");
      console.log(EditValue);
      this.$router.push("/adddata")
      console.log(EditValue);
    },


    //for delete item sure popup message display and ic ok them cancle value
    deleteItem(item) {
      this.editedIndex = this.data.Categories.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },


    deleteItemConfirm() {
      this.data.Categories.splice(this.editedIndex, 1);
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
        Object.assign(
          this.data.Categories[this.editedIndex],
          this.editedItem
        );
        this.$router.push("/adddata")
        localStorage.setItem("CategorieData", JSON.stringify(this.data.Categories));
      } else {
        this.data.Categories.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
<style></style>
