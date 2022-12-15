<template>
  <div class="itemform">
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-cols cols="12" md="4" sm="4" class="form_col">
            <div class="form">
              <h2>Add new Item</h2>

              <!-- id -->

              <v-text-field
                v-model="ID"
                :rules="idRules"
                :counter="3"
                label="ID"
                required
              ></v-text-field>

              <!-- name -->

              <v-text-field
                v-model="name"
                :counter="20"
                label="name"
                required
              ></v-text-field>

              <!-- categories -->

              <v-select :items="items" label="category" v-model="category"></v-select>

              <!-- description -->

              <v-textarea
                solo
                v-model="description"
                name="description"
                :rules="descriptionRules"
                :counter="100"
                label="description"
              ></v-textarea>

              <!-- price -->

              <v-text-field
                v-model="price"
                prefix="$"
                :rules="priceRules"
                label="price"
              ></v-text-field>

              <!-- status -->
              <v-row class="form_row">
                <v-col cols="12" md="4" sm="4">
                  <v-switch v-model="status" color="#22223a"></v-switch>
                </v-col> </v-row
              ><v-row>
                <!-- button -->
                <v-col cols="12" md="4" sm="4">
                  <v-btn
                    color="#22223a"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                    v-on:click="AddItems()"
                  >
                    AddItem
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-cols>
        </v-row>
      </v-container>
    </v-form>
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
    AddItems: function () {
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
