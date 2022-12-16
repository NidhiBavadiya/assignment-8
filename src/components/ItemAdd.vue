<template>
  <div class="container">
    <v-row class="justify-content-center">
      <v-col cols="12" sm="6" md="6" class="form1">
        <v-card>
          <v-card-title class="formtitle">
            <h3 class="text-h5">Add-Items</h3>
          </v-card-title>
          <!-- display table data name id status etc....  -->
          <v-card-text class="formdisplay">
            <!-- form for edit.....  -->
            <v-container>
              <v-row class="justify-content-around">

                <!-- id -->
                <v-col cols="12" sm="6" md="6"
                  >ID
                  <v-text-field v-model="ID" outlined dense required></v-text-field>
                </v-col>

                <!-- name -->
                <v-col cols="12" sm="6" md="6"
                  >Name
                  <v-text-field v-model="name" outlined dense required></v-text-field>
                </v-col>

                <!-- category -->
                <v-col cols="12" sm="6" md="6"
                  >Category
                  <v-select :items="items" outlined dense v-model="category"></v-select>
                </v-col>

                <!-- price -->
                <v-col cols="12" sm="6" md="6"
                  >Price
                  <v-text-field
                    v-model="price"
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
                          v-model="description"
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
                        <v-switch v-model="status" required>
                          <span>{{ value }}</span>
                        </v-switch>
                      </v-col>
                    </v-row>
                <!--  -->
              </v-row>
            </v-container>
          </v-card-text>

          <!-- edit form save aur cancle button for edit data  -->
          <v-card-actions class="justify-content-center">
            <v-btn  class="custom-button" text @click="AddItems">
              Add-Item
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import data from "../assets/data.json";
export default {
  data: () => ({
    valid: true,
    ID: "",
    idRules: [
      (v) => !!v || "Id is required",
      (v) => Number.isInteger(Number(v)) || "The value must be an integer number",
      (v) => v.length <= 3 || "ID must be less than 10 characters",
    ],
    name: "",
    category: "",
    description: "",
    descriptionRules: [
      (v) => !!v || "Description is required",
      (v) => v.length <= 100 || "Description must be less than 100 characters",
    ],
    price: "",
    priceRules: [
      (v) => !!v || "price is required",
      (v) => Number.isInteger(Number(v)) || "The value must be an integer number",
    ],
    status: "",

    //json array object
    data: data,
    items:null,
  }),
  mounted() {
    const CateValue = localStorage.getItem("Items");
    console.log(CateValue);
    this.Categorycheck();
  },

  methods: {
    Categorycheck: function () {
      this.items = [];
      console.log(this.data.Categories);
      this.data.Categories.forEach((element) => {
        if (element.status === true || element.status === "Active") {
          console.log(element.status);
          console.log(element.name);
          this.items.push(element.name);
        }
      });
    },

    //method for new value push in array
    AddItems() {
      const newitem = {
        id: this.ID,
        name: this.name,
        category: this.category,
        description: this.description,
        price: this.price,
        status: this.status,
      };
      console.log(newitem);
      this.data.itemlist.push(newitem);
      console.log(this.data.itemlist);
      localStorage.setItem("Items", JSON.stringify(this.data.itemlist));
      this.$router.push("/itemlist");
    },
    //get catagory from localstorage...
  },
};
</script>
