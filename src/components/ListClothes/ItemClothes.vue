<template>
  <!-- <div>{{ item.name }}: {{ item.cost }}</div> -->
  <div>{{ item }}</div>
</template>

<script>
export default {
  name: "ItemClothes",
  props: {
    item: { type: Object, default: () => ({}) },
  },
};
</script>

<script></script>
