<template>
  <div class="btn_wrap">
    <div class="buyBtn_container">
      <a href="https://www.naver.com/">
        <img
          :src="
            require(`../../assets/image/banner/${localLang}/banner_btn_adventurer_support.png`)
          "
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import store from "@/store";

export default defineComponent({
  name: "Banner",
  setup() {
    const t = useI18n();
    const localLang = store.getters.getLocalLang;
    return { t, localLang };
  },
});
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index.scss";

.btn_wrap {
  @extend .flex_row_center;
  gap: 10%;
}

.buyBtn_container {
  @extend .flex_column_center;
  padding-top: 42%;
}

.cancellation-btn {
  padding-left: 25%;
  position: absolute;
  padding-top: 2%;
  color: #00f5ff;
}
</style>
