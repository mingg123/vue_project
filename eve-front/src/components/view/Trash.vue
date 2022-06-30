<template>
  <div class="trash_wrap"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Trash",
  setup() {},
  methods: {},
});
</script>
<style lang="scss">
@import "../../assets/scss/index.scss";
.trash_wrap {
  height: 100%;
  background-image: url("../../assets/image/common/contents_bg.png");
  background-size: $background_image_width $background_image_height;
}
</style>
