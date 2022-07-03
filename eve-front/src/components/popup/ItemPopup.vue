<template>
  <div class="item_popup_wrap">
    <div v-if="item" class="item_container">
      <img class="item_img" :src="item.imageUrl" />
      <div class="item_content">{{ item.name }}</div>
    </div>
    <div class="close_btn_container">
      <img
        src="../../assets/image/popup/alert_frame_btn.png"
        class="close_btn"
        @click="onClose"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import store from "@/store";
import { Item } from "@/types";

export default defineComponent({
  name: "ItemPopup",
  props: {
    item: Object as PropType<Item>,
  },
  setup() {},
  methods: {
    onClose() {
      store.dispatch("setShowItemPopup", false);
    },
  },
});
</script>
<style lang="scss" scope>
@import "../../assets/scss/index.scss";
.item_popup_wrap {
  background-image: url("../../assets/image/popup/popup_bg.png");
  background-size: 450px 300px;
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 300px;
  align-items: center;

  .popup_title {
    width: 100%;
    display: flex;
    justify-content: center;
    flex: 1;
    align-items: center;
    font-size: xx-large;
    color: white;
  }
  .item_container {
    display: flex;
    flex-direction: row;
    flex: 2;
    padding-top: 18%;
    .item_img {
      width: 80px;
      height: 80px;
    }
    .item_content {
      width: 200px;
      height: 100px;
    }
  }

  .close_btn_container {
    flex: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 13%;
  }
}
</style>
