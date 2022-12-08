<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="ID"
            :rules="idRules"
            :counter="3"
            label="ID"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="Name"
            :rules="DescriptionRules"
            :counter="10"
            label="Name"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
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
      <v-row>
        <v-switch v-model="switch1" :label="`avctive: ${switch1.toString()}`"></v-switch>
      </v-row>
      <v-row>
        <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on" v-on:click='AddItems()'>
          AddItem
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
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
     AddItem:[]
  }),
  methods: {
    AddItems:function(){
        const newvalue ={
            id :this.ID,
            name:this.Name,
            Description:this.Description
        }
        console.log(newvalue);
        this.AddItem.push(newvalue)
        localStorage.setItem("AddData", JSON.stringify(this.AddItem));
    },
  
}
};
</script>
