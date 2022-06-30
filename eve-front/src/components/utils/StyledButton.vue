<template>
  <a
    :href="link"
    class="btn_wrap"
    :style="{
      height: height + 'px',
      width: width + 'px',
      backgroundColor: bgColor,
    }"
  >
    {{ $t("buy_label") }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "StyledButton",
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
    link: {
      type: String,
      default: "/item",
    },
  },
  setup() {
    const t = useI18n();
    return { t };
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
.btn_wrap {
  background-color: #9abf7f;
  font-size: large;
  color: white;
  border-radius: 15px;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
