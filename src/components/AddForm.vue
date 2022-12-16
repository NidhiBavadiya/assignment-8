<template>
  <div class="container">
    <v-row class="justify-content-center">
      <v-col cols="12" sm="6" md="6" class="form1">
        <v-card>
          <v-card-title class="formtitle">
            <h3>Add-Category</h3>
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
                    v-model="ID"
                    :rules="idRules"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>

                <!-- name -->
                <v-col cols="12" sm="6" md="6">
                  Name
                  <v-text-field v-model="name" outlined dense></v-text-field>
                </v-col>

                <!-- description -->
                <v-col cols="12" sm="6" md="12">
                  <label for="">Description</label>
                  <v-textarea
                    outlined
                    dense
                    v-model="description"
                    :rules="descriptionRules"
                    :counter="100"
                  ></v-textarea>
                </v-col>
              </v-row>

              <!-- toggle switch -->
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-switch v-model="status"> </v-switch>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <!-- edit form save aur cancle button for edit data  -->
          <v-card-actions class="justify-content-center">
            <v-btn class="custom-button" text @click="addcategory"> Add-Category </v-btn>
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
    // const CateValue = localStorage.getItem("CategorieData");

    const EditData = localStorage.getItem("EditData");
    console.log(EditData);
    console.log(this.data.Categories);
  },

  methods: {
    addcategory() {
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
