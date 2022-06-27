<template>
  <div class="wrap">
    <h1 style="flex: 1">알림</h1>

    <div v-if="item" class="item_container">
      <img class="item_img" :src="item.imageUrl" />
    </div>
    <button class="close_btn" @click="onClose">확인</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import store from "@/store";
import { Item } from "@/components/types";

export default defineComponent({
  name: "getItemPopup",
  props: {
    item: Object as PropType<Item>,
  },
  setup() {},
  methods: {
    onClose() {
      store.dispatch("setItemPopup", false);
    },
  },
});
</script>
<style lang="scss" scope>
.wrap {
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 300px;
  border: 1px solid;
  background-color: #133550;
  align-items: center;

  .item_container {
    display: flex;
    flex-direction: row;
    flex: 2;
    .item_img {
      width: 50px;
      height: 50px;
    }
  }

  .close_btn {
    flex: 1;
    width: 100%;
  }
}
</style>
