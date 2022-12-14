<template>
  <div id="additem">
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
<style scoped>
*{
  overflow: hidden;
}
.v-main__wrap {
    flex: 1 1 auto;
    max-width: 100%;
    position: relative;
}
#additem{
  height:100vh;
}
</style>
