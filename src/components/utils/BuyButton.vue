<template>
  <a
    href="#"
    class="btn_wrap"
    :style="{
      height: height + 'px',
      width: width + 'px',
      backgroundColor: bgColor,
    }"
    >{{ label }}</a
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BuyButton",
  props: {
    label: {
      type: String,
      default: "구매하기",
    },
    height: {
      type: Number,
      default: 30,
    },
    width: {
      type: Number,
      default: 120,
    },
    bgColor: {
      type: String,
      default: "#000",
    },
  },
  data() {},
  methods: {},
});
</script>
<style lang="scss" scoped>
.btn_wrap {
  background-color: #9abf7f;
  display: inline-block;
  font-size: large;
  padding: 20px 60px;
  color: white;
  border-radius: 15px;
  text-decoration: none;
  font-weight: bold;
}
</style>
