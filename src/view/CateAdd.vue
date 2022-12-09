<template>
  <div>
    <addform :Categories="Categories" :headers="headers"></addform>

  </div>
</template>

<script>
import AddForm from "../components/AddForm.vue";


export default {
  props: ["Categories", "headers" ,"items"],
  components: {
    'addform': AddForm,
  },
};
</script>
