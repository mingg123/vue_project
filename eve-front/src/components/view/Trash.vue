<template>
  <div class="trash_wrap">

    <button @click="addItem()"> 보내기 </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { addItem } from "@/API/ItemAxios";
import { dummyItem } from "@/types/dummy";

export default defineComponent({
  name: "Trash",
  setup() {},
  methods: {
    addItem() {
      addItem(dummyItem[0]);
    },
  },
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
