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
                <h2>Add new Categories</h2>
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
                <v-col md="3" class="btnadd">
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
    name: "",
    description: "",
    descriptionRules: [
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
        name: this.name,
        description: this.description,
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
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

.row {
  width: 60%;
  max-width: 100%;
}
.form {
  padding: 20px 50px;
  margin: 10px 200px;
  box-shadow: 0px 5px 20px #22223a;
  border-radius: 30px;
}
h2 {
  background: #222230;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 34px;
  font-size: calc(1.325rem + 0.9vw);
}
.dataform {
  height: 100%;
}
title {
  background: #222831;
}
@media (max-width: 1600px) {
  .row {
    width: 80%;
  }
}
@media (max-width: 1250px) {
  .row {
    width: 100%;
  }
}
@media (max-width: 976px) {
  .row {
    width: 100%;
  }
}
@media (max-width: 576px) {
  .row {
    width: 100%;
  }
}
</style>
