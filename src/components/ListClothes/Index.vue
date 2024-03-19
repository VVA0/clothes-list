<template>
  <div>
    <div v-for="item in filteredList" :key="item.id">
      {{ item.name }}: {{ item.cost }}
      <!-- <ItemClothes :item="item" /> -->
    </div>
  </div>
</template>

<script>
// import ItemClothes from "./ItemClothes.vue";

export default {
  name: "ListClothes",
  components: {
    //  ItemClothes,
  },
  computed: {
    filteredList() {
      return this.$store.getters.listClothes;
    },
  },
};
</script>

<style></style>
