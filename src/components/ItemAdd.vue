<template>
  <v-form v-model="valid">
    <v-container>
      <div class="form">
        <h2>Add new Item</h2>

        <!-- id -->
        <v-row class="form_row">
          <v-col cols="12" md="4" sm="4" class="form_col">
            <v-text-field
              v-model="ID"
              :rules="idRules"
              :counter="3"
              label="ID"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- name -->
        <v-row class="form_row">
          <v-col cols="12" md="4" sm="4" class="form_col">
            <v-text-field
              v-model="Name"
              :counter="20"
              label="Name"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- categories -->
        <v-row class="form_row">
          <v-col cols="12" md="4" sm="4" class="form_col">
            <v-select :items="items" label="Category" v-model="Category"></v-select>
          </v-col>
        </v-row>

        <!-- description -->
        <v-row class="form_row">
          <v-col cols="12" md="4" sm="4" class="form_col">
            <v-textarea
              solo
              v-model="Description"
              name="Description"
              :rules="DescriptionRules"
              :counter="100"
              label="Description"
            ></v-textarea>
          </v-col>
        </v-row>

        <!-- price -->
        <v-row class="form_row">
          <v-col cols="12" md="4" sm="4">
            <v-text-field
              v-model="Price"
              prefix="$"
              :rules="PriceRules"
              label="Price"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- status -->
        <v-row class="form_row">
          <v-switch v-model="status"></v-switch>
        </v-row>

        <!-- button -->
        <v-row class="form_row">
          <v-btn
            color="primary"
            dark
            class="mb-2"
            v-bind="attrs"
            v-on="on"
            v-on:click="AddItems()"
          >
            AddItem
          </v-btn>
        </v-row>
      </div>
    </v-container>
  </v-form>
</template>

<script>
export default {
  props: ["Categories", "headers", "itemlist", "items"],
  data: () => ({
    valid: true,
    ID: "",
    idRules: [
      (v) => !!v || "Id is required",
      (v) => Number.isInteger(Number(v)) || "The value must be an integer number",
      (v) => v.length <= 3 || "ID must be less than 10 characters",
    ],
    Name: "",
    Category: "",

    Description: "",
    DescriptionRules: [
      (v) => !!v || "Description is required",
      (v) => v.length <= 100 || "Description must be less than 100 characters",
    ],
    Price: "",
    PriceRules: [
      (v) => !!v || "price is required",
      (v) => Number.isInteger(Number(v)) || "The value must be an integer number",
    ],
    status: "",
    // items:['watch','footware','begs']
  }),
  mounted() {
    console.log(this.items);
    const CateValue = localStorage.getItem("Items");
    console.log(CateValue);

    this.Categorycheck();
  },

  methods: {
    Categorycheck: function () {
      this.Categories.forEach((element) => {
        console.log(element.status);
        console.log(element.Name);
        if (element.status === true) {
          console.log(element.Name);
          this.items.push(element.Name);
        }
      });
    },

    //   method for new value push in array
    AddItems: function () {
      const newitem = {
        id: this.ID,
        Name: this.Name,
        Category: this.Category,
        Description: this.Description,
        Price: this.Price,
        status: this.status,
      };
      console.log(newitem);
      this.itemlist.push(newitem);
      console.log(this.itemlist);
      localStorage.setItem("Items", JSON.stringify(this.itemlist));
      this.$router.push("/itemlist");
    },
    //get catagory from localstorage...
  },
};
</script>
<style>
.form {
  padding: 50px 0 0 100px;
}
</style>
