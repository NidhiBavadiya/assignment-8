<template>
  <v-form v-model="valid">
    <v-container>
      <div class="form">
        <h2>Add new Categories</h2>

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

        <!-- discription -->
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
        <!-- status -->
        <v-row class="form_row">
          <v-switch v-model="status"></v-switch>
        </v-row>
        <!-- add button -->
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
  props: ["Categories", "headers"],
  data: () => ({
    valid: true,
    ID: "",
    idRules: [
      (v) => !!v || "id is required",
      (v) => Number.isInteger(Number(v)) || "The value must be an integer number",
      (v) => v.length <= 3 || "id must be less than 10 characters",
    ],
    Name: "",
    Description: "",
    DescriptionRules: [
      (v) => !!v || "Description is required",
      (v) => v.length <= 100 || "Description must be less than 100 characters",
    ],
    status: "",
  }),
  mounted() {
    const CateValue = localStorage.getItem("CategorieData");
    console.log(CateValue);
    console.log(this.Categories);
  },

  // method for new value add
  methods: {
    AddItems: function () {
      const newvalue = {
        id: this.ID,
        Name: this.Name,
        Description: this.Description,
        status: this.status,
      };
      console.log(newvalue);
      this.Categories.push(newvalue);
      console.log(this.Categories);
      localStorage.setItem("CategorieData", JSON.stringify(this.Categories));
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
