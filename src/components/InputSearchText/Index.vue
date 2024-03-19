<template><InputText v-model="searchText" placeholder="Поиск" /></template>

<script>
import InputText from "@/components/UI/InputText.vue";

export default {
  name: "InputSearchText",
  components: {
    InputText,
  },
  computed: {
    searchText: {
      get() {
        return this.$store.getters.searchText;
      },
      set(value) {
        this.$store.dispatch("inputSearchText", value);
      },
    },
  },
};
</script>
