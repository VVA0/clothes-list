<template>
  <div id="app">
    <h1>Список одежды</h1>
    <InputSearchText />
    <ListClothes />
  </div>
</template>

<script>
import ListClothes from "@/components/ListClothes/Index.vue";
import InputSearchText from "@/components/InputSearchText/Index.vue";

export default {
  name: "App",
  components: {
    ListClothes,
    InputSearchText,
  },
};
</script>

<style></style>
