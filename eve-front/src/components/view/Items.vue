<template>
  <TransitionGroup
    class="item_frame"
    appear
    tag="ul"
    :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
  >
    <div
      class="item_container"
      v-for="(item, idx) in this.$store.state.items"
      :key="item.id"
      :data-index="idx"
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
  </TransitionGroup>
</template>

<script lang="ts" scope>
import { defineComponent } from "vue";
import ItemZone from "@/components/common/ItemZone.vue";
import store from "@/store";
import { GaspTargetElement } from "@/types";
import gsap from "gsap";

export default defineComponent({
  name: "Items",
  setup() {
    //TODO 이걸 호출 안하면 초기렌더링이 안되는데 vue 라이프사이클 좀 더 공부가 필요한듯함
    store.getters.getItems;
  },
  components: { ItemZone },
  methods: {
    removeItem(id: string) {
      store.dispatch("removeItem", id);
    },
    onBeforeEnter(el: GaspTargetElement): void {
      el.style.setProperty("opacity", "0");
    },
    onEnter(el: GaspTargetElement): void {
      gsap.to(el, {
        opacity: 1,
        delay: el.dataset.index * 0.03,
      });
    },
  },
});
</script>
<style lang="scss" scope>
@import "../../assets/scss/index.scss";

.item_frame {
  height: 480px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  justify-content: flex-start;
  padding-left: 10%;
  padding-top: 3%;
  .item_container {
    width: 100px;
    height: 100px;
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
        top: 9%;
      }
    }
  }
}
.item_frame::-webkit-scrollbar {
  display: none;
}
</style>
