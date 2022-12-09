<template>
  <div>
    <itemadd :items="items"></itemadd>
  </div>
</template>

<script>
import ItemAdd from "../components/ItemAdd.vue";

export default {
  props: ["Categories", "headers" ,"items"],
  components: {
     'itemadd': ItemAdd,
  },
};
</script>
