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
    // items:['watch','footware','begs']
  }),
  mounted() {
    // const CateValue = localStorage.getItem("Items");
    // console.log(CateValue);

    this.Categorycheck();
  },

  methods: {
    Categorycheck: function () {
      this.items = [];
      console.log(this.Categories);
      this.Categories.forEach((element) => {
        if (element.status === true || element.status === "Active") {
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
      this.itemlist.push(newitem);
      console.log(this.itemlist);
      localStorage.setItem("Items", JSON.stringify(this.itemlist));
      this.$router.push("/itemlist");
    },
    //get catagory from localstorage...
  },
};
</script>

<style scoped>
.row {
  width: 60%;
  max-width: 100%;
}
.form {
  padding: 20px 50px;
  margin: 10px 20 0px;
  box-shadow: 0px 5px 20px #22223a;
  background: #fff;
}
h2 {
  background: #222230;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 34px;
  font-size: calc(1.325rem + 0.9vw);
}
.v-application .primary--text {
  color: #222230 !important;
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
