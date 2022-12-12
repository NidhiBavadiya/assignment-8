<template>
  <div>
    <itemadd
      :Categories="Categories"
      :itemlist="itemlist"
      :Itemheaders="Itemheaders"
      :items="items"
    ></itemadd>
  </div>
</template>

<script>
import ItemAdd from "../components/ItemAdd.vue";

export default {
  props: ["Categories", "itemlist", "Itemheaders","items"],
  components: {
    itemadd: ItemAdd,
  },
};
</script>
