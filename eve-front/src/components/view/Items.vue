<template>
  <div
    class="at_wrap"
    :style="{
      alignItems: 'flex-start',
      backgroundImage: `url(${require('../../assets/image/common/contents_bg.png')})`,
    }"
  >
    <div class="item_frame">
      <div
        class="item_container"
        v-for="item in this.$store.state.items"
        :key="item.id"
      >
        <div class="item_inner">
          <ItemZone :item="item" :height="'71px'" />
          <img
            class="delete_icon"
            src="../../assets/image/common/close-button.png"
            @click="removeItem(item.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" scope>
import { defineComponent } from "vue";
import ItemZone from "@/components/utils/ItemZone.vue";
import store from "@/store";

export default defineComponent({
  name: "Items",
  setup() {
    const sortOptions = ["가장오래된순", "가장최신순"];
    //TODO 이걸 호출 안하면 초기렌더링이 안되는데 vue 라이프사이클 좀 더 공부가 필요한듯함
    store.getters.getItems;
    return { sortOptions };
  },
  components: { ItemZone },
  methods: {
    removeItem(id: string) {
      store.dispatch("removeItem", id);
    },
  },
});
</script>
<style lang="scss" scope>
.item_frame {
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  justify-contentcontent: flex-start;
  padding-left: 10%;
  .item_container {
    width: 130px;
    height: 130px;
    margin-right: 20px;
    margin-top: 20px;
    .item_inner {
      position: relative;
      margin-left: 10%;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      justify-content: center;
      .delete_icon {
        height: 30px;
        position: absolute;
        right: 11%;
        top: 13%;
      }
    }
  }
}
.item_frame::-webkit-scrollbar {
  display: none;
}
</style>
