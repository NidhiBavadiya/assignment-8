<template>
  <div>
    <addform :desserts="desserts" :headers="headers"></addform>
  </div>
</template>

<script>
import AddForm from "../components/AddForm.vue";
export default {
  props: ["desserts", "headers"],
  components: {
    addform: AddForm,
  },
};
</script>
