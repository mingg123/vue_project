<template>
  <div class="wrap">
    <div class="popup_title">알림</div>

    <div v-if="item" class="item_container">
      <img class="item_img" :src="item.imageUrl" />
      <div class="item_content">{{ item.name }}</div>
    </div>
    <div class="close_btn_container">
      <button class="close_btn" @click="onClose">확인</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import store from "@/store";
import { Item } from "@/types";

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
@import "../../assets/scss/index.scss";
.wrap {
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 300px;
  border: 1px solid;
  background-color: #133550;
  align-items: center;

  .popup_title {
    width: 100%;
    display: flex;
    justify-content: center;
    flex: 1;
    align-items: center;
    font-size: xx-large;
    color: white;
    border-bottom: 0.5px solid $lnb_font_color;
  }
  .item_container {
    display: flex;
    flex-direction: row;
    flex: 2;
    padding-top: 5%;
    .item_img {
      width: 80px;
      height: 80px;
    }
    .item_content {
      width: 200px;
      height: 100px;
      color: white;
    }
  }

  .close_btn_container {
    flex: 1;
    width: 100%;
    border-top: 0.5px solid $lnb_font_color;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .close_btn {
      border-radius: 2em;
      color: #133550;
      background-color: $lnb_font_color;
      outline: none;
      width: 200px;
      height: 40px;
      color: white;
      font-size: x-large;
    }
  }
}
</style>
