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
              :counter="10"
              label="Name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- categories -->
        <v-row class="form_row">
          <v-col cols="12" md="4" sm="4" class="form_col">
            <v-select :items="items" label="Category "></v-select>
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
              prefix="$"
              label="price"
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
  props: ["Categories", "headers","items"],
  data: () => ({
    valid: true,
    ID: "",
    idRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 3 || "Name must be less than 10 characters",
    ],
    Name: "",
    Category:'',
    Description: "",
    DescriptionRules: [
      (v) => !!v || "Description is required",
      (v) => v.length <= 100 || "Description must be less than 100 characters",
    ],
    price:'',
    status: false,
  }),
  mounted() {
    console.log(this.items);
  },
  methods: {
    AddItems: function () {
      const newitem = {
        id: this.ID,
        Name: this.Name,
        Category:this.Category,
        Description: this.Description,
        price:this.price,
        status: this.status,
      };
      console.log(newitem);
      this.items.push(newitem);
      console.log(this.Categories);
      localStorage.setItem("AddItem", JSON.stringify(this.items));
      // localStorage.removeItem("AddData");
      var AddCategories = localStorage.getItem("AddData");
      console.log(AddCategories);
      this.$router.push("/");
    },
  },
};
</script>
<style>
.form {
  padding: 50px 0 0 100px;
}
</style>
