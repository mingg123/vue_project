<template>
  <div class="trash_wrap">
    <button @click="addItem()">보내기</button>
    <button @click="allItem()">모든 아이템 받와오기</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { addItem, getAllItem } from "@/API/ItemAxios";
import { dummyItem } from "@/types/dummy";

export default defineComponent({
  name: "Trash",
  setup() {
    const newItem = getAllItem();
    console.log(newItem);
    return { newItem };
  },
  methods: {
    addItem() {
      addItem(dummyItem[0]);
    },
    allItem() {
      getAllItem();
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
