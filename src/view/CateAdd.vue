<template>
  <div id="add">
    <addform :Categories="Categories" :headers="headers" :items="items"></addform>
  </div>
</template>

<script>
import AddForm from "../components/AddForm.vue";

export default {
  props: ["Categories", "headers", "items"],
  components: {
    addform: AddForm,
  },
};
</script>
<style>
#add{
  height:100vh;
}

.v-main__wrap {
    flex: 1 1 auto;
    max-width: 100%;
    position: relative;
    height:100vh;
    
}

</style>
