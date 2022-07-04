<template>
  <div class="item_wrap">
    <Items />
  </div>
</template>

<script lang="ts" scope>
import { defineComponent } from "vue";
import Items from "../view/Items.vue";

export default defineComponent({
  name: "ItemContainer",
  components: { Items },
});
</script>
<style lang="scss" scope>
@import "../../assets/scss/index.scss";
.item_wrap {
  @extend .wrap;
  background-image: url("../../assets/image/common/contents_bg.png");
  align-items: flex-start;
}
</style>
