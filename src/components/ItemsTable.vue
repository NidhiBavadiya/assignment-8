<template>
  <div class="container">
    <!-- display table for items -->
    <v-data-table
      :headers="data.Itemheaders"
      :items="data.itemlist"
      class="elevation-1 mytable"
    >
      <!-- table value tr td th -->
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
              <v-btn light class="mb-2" v-bind="attrs" v-on="on"> New Item </v-btn>
            </template>
            <!-- form for edit data... -->
            <v-card>
              <v-card-title class="formtitle">
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row class="justify-content-around">
                    <!-- id -->
                    <v-col cols="12" sm="6" md="6"
                      >ID
                      <v-text-field
                        v-model="editedItem.id"
                        required
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                    <!-- name -->
                    <v-col cols="12" sm="6" md="6"
                      >Name
                      <v-text-field
                        v-model="editedItem.name"
                        required
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                    <!-- category -->
                    <v-col cols="12" sm="6" md="6"
                      >Category
                      <v-select
                        :items="items"
                        v-model="editedItem.category"
                        outlined
                        dense
                      ></v-select>
                    </v-col>
                    <!-- price -->
                    <v-col cols="12" sm="6" md="6"
                      >Price
                      <v-text-field
                        v-model="editedItem.price"
                        prefix="$"
                        required
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>

                    <!-- description -->
                    <v-row class="form_row p-0">
                      <v-col cols="12" sm="6" md="6"
                        >Description
                        <v-textarea
                          solo
                          v-model="editedItem.description"
                          name="description"
                          :rules="descriptionRules"
                          :counter="100"
                          required
                          outlined
                          dense
                        ></v-textarea
                      ></v-col>

                      <!-- status -->
                      <v-col cols="12" sm="6" md="6">
                        <v-switch v-model="editedItem.status" required>
                          <span>{{ value }}</span>
                        </v-switch>
                      </v-col>
                    </v-row>
                    <!--  -->
                  </v-row>
                </v-container>
              </v-card-text>
              <!-- save & Cancel button -->
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="custom-button" text @click="close"> Cancel </v-btn>
                <v-btn class="custom-button" text @click="save"> Save </v-btn>
                <v-spacer></v-spacer>
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
                <v-btn class="custom-button" text @click="closeDelete">Cancel</v-btn>
                <v-btn class="custom-button" text @click="deleteItemConfirm">OK</v-btn>
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
    </v-data-table>
  </div>
</template>

<script>
import data from "../assets/data.json";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    //json array object
    data: data,
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
    items:null,
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
      console.log(this.data.Categories);
      this.data.Categories.forEach((element) => {
        console.log(element.status);
        console.log(element.name);
        if (element.status === true || element.status === "Active") {
          console.log(element.name);
          console.log(element.status);
          this.items.push(element.name);
        }
      });
    },

    editItem(item) {
      this.editedIndex = this.data.itemlist.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      const EditValue = localStorage.getItem("EditData");
      console.log(EditValue);
    },

    deleteItem(item) {
      this.editedIndex = this.data.itemlist.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.data.itemlist.splice(this.editedIndex, 1);
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
        Object.assign(this.data.itemlist[this.editedIndex], this.editedItem);
        localStorage.setItem("Items", JSON.stringify(this.data.itemlist));
      } else {
        console.log("else");
        this.data.itemlist.push(this.editedItem);
        localStorage.setItem("Items", JSON.stringify(this.data.itemlist));
        console.log("this.data.Items", this.data.itemlist);
      }
      this.close();
    },
  },
};
</script>
