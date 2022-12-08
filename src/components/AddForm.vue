<template>
  <v-form v-model="valid">
    <v-container>
      <div class="form">
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
        <v-row class="form_row">
          <v-col cols="12" md="4" sm="4" class="form_col">
            <v-text-field
              v-model="Name"
              :rules="DescriptionRules"
              :counter="10"
              label="Name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
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
        <v-row class="form_row">
          <v-switch
            v-model="switch1"
            :label="`avctive: ${switch1.toString()}`"
          ></v-switch>
        </v-row>
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
  props: ["desserts", "headers"],
  data: () => ({
    valid: true,
    ID: "",
    idRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 3 || "Name must be less than 10 characters",
    ],
    Name: "",
    Description: "",
    DescriptionRules: [
      (v) => !!v || "Description is required",
      (v) => v.length <= 100 || "Description must be less than 100 characters",
    ],
    switch1: true,
  }),
  methods: {
    AddItems: function () {
      const newvalue = {
        id: this.ID,
        name: this.Name,
        Description: this.Description,
      };
      console.log(newvalue);
      this.headers.push(newvalue);
      localStorage.setItem("AddData", JSON.stringify(this.desserts));
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
