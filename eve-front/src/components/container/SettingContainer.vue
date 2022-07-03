<template>
  <div class="setting_wrap">
    <Setting />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Setting from "../view/Setting.vue";

export default defineComponent({
  components: { Setting },
  name: "SettingContainer",
});
</script>
<style lang="scss" scope>
@import "../../assets/scss/index.scss";
.setting_wrap {
  @extend .wrap;
  background-image: url("../../assets/image/common/contents_bg.png");
}
</style>
