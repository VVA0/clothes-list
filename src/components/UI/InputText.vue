<template>
  <input v-model="computedValue" :placeholder="placeholder" :type="type" />
</template>

<script>
export default {
  name: "InputText",
  props: {
    value: { type: [String, Number], default: "" },
    placeholder: { type: String, default: "" },
    type: { type: String, default: "text" },
  },
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style></style>
