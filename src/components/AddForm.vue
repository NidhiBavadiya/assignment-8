<template>
  <div class="itemform">
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-cols lg="4"></v-cols>
          <v-cols cols="12" md="6" sm="6" lg="4" class="form_col">
            <div class="form">
              <!-- title of form -->
              <div class="title">
                <span class="text-h5">{{ formTitle }}</span>
              </div>

              <!-- form input  -->
              <!-- id -->

              <v-text-field
                class="text-light"
                v-model="ID"
                :rules="idRules"
                :counter="3"
                label="ID"
                required
              ></v-text-field>

              <!-- name -->

              <v-text-field
                v-model="name"
                :counter="10"
                label="name"
                required
                class="custom-placeholer-color"
              ></v-text-field>

              <!-- discription -->

              <v-textarea
                solo
                v-model="description"
                name="description"
                :rules="descriptionRules"
                :counter="100"
                label="description"
              ></v-textarea>

              <!-- status -->
              <v-row class="form_row">
                <v-switch v-model="status" color="#22223a"></v-switch>
              </v-row>
              <!-- add button -->
              <v-row class="form_row">
                <v-col md="6" class="btnadd">
                  <v-btn
                    class="btn"
                    v-bind="attrs"
                    v-on="on"
                    v-on:click="AddItems()"
                    color="#22223a"
                    ><span> AddItem</span>
                  </v-btn>
                </v-col>
              </v-row>
              <!--  -->
            </div>
          </v-cols>
          <v-cols lg="4"></v-cols>
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
      (v) => !!v || "id is required",
      (v) => Number.isInteger(Number(v)) || "The value must be an integer number",
      (v) => v.length <= 3 || "id must be less than 10 characters",
    ],
    name: "",
    description: "",
    descriptionRules: [
      (v) => !!v || "Description is required",
      (v) => v.length <= 100 || "Description must be less than 100 characters",
    ],
    status: "",
    //json array object
    data: data,
  }),

  mounted() {
    const CateValue = localStorage.getItem("CategorieData");
    console.log(CateValue);
    console.log(this.data.Categories);
  },
  // method for new value add
  methods: {
    AddItems: function () {
      const newvalue = {
        id: this.ID,
        name: this.name,
        description: this.description,
        status: this.status,
      };
      console.log(newvalue);
      this.data.Categories.push(newvalue);
      console.log(this.data.Categories);
      localStorage.setItem("CategorieData", JSON.stringify(this.data.Categories));
      this.$router.push("/");
    },
  },
};
</script>
<style></style>
