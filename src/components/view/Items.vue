<template>
  <div
    class="at_wrap"
    :style="{
      alignItems: 'flex-start',
      backgroundImage: 'none',
    }"
  >
    <div class="select_container">
      <select class="day_select" @change="onChangeSortOption($event)">
        <option v-for="option in sortOptions" :value="option" :key="option">
          {{ option }}
        </option>
      </select>
    </div>
    <div class="item_frame">
      <div class="at_frame" style="justify-content: flex-start">
        <div v-for="item in getItems" :key="item.id">
          <div
            class="at_container"
            :style="{
              marginLeft: '10%',
              width: '150px',
              display: 'flex',
              flexDirection: 'column',
            }"
          >
            <ItemZone :item="item" />
            <span>X {{ item.amount }}</span>
            <button @click="removeItem(item.id)">삭제</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" scope>
import { defineComponent } from "vue";
import { mapGetters, useStore } from "vuex";
import { VueEvent } from "@/components/types";
import ItemZone from "@/components/utils/ItemZone.vue";
import store from "@/store";

export default defineComponent({
  name: "Items",
  setup() {
    const sortOptions = ["가장오래된순", "가장최신순"];
    const store = useStore();
    return { sortOptions };
  },
  components: { ItemZone },
  methods: {
    removeItem(id: string) {
      store.dispatch("removeItem", id);
    },
    onChangeSortOption(e: VueEvent.Input<HTMLSelectElement>) {
      console.log(e.target.value);
    },
  },
  computed: {
    ...mapGetters(["getItems"]),
  },
});
</script>
<style lang="scss">
.item_wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  .item_frame {
    display: flex;
    flex-direction: column;
    padding-left: 1.5%;
  }
}
</style>
