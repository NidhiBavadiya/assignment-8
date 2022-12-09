<template>
  <div>
    <itemadd
      :Categories="Categories"
      :itemlist="itemlist"
      :Itemheaders="Itemheaders"
    ></itemadd>
  </div>
</template>

<script>
import ItemAdd from "../components/ItemAdd.vue";

export default {
  props: ["Categories", "itemlist", "Itemheaders"],
  components: {
    itemadd: ItemAdd,
  },
};
</script>
