<template>
  <div
    class="at_wrap"
    :style="{
      alignItems: 'flex-start',
      backgroundImage: 'none',
    }"
  >
    <div class="itemSelect_container">
      <select class="day_select" @change="onChangeSortOption($event)">
        <option v-for="option in sortOptions" :value="option" :key="option">
          {{ option }}
        </option>
      </select>
    </div>
    <div class="item_frame" :style="{ display: 'flex', gap: '3%' }">
      <div
        class="at_frame"
        :style="{ justifyContent: 'flex-start', width: '150px' }"
        v-for="item in getItems"
        :key="item.id"
      >
        <div
          class="at_container"
          :style="{
            marginLeft: '10%',
            width: '100px',
            height: '150px',
            display: 'flex',
            flexDirection: 'column',
          }"
        >
          <ItemZone :item="item" :height="'80px'" />
          <button @click="removeItem(item.id)">삭제</button>
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
<style lang="scss" scope>
.itemSelect_container {
  .day_select {
    width: 120px;
    height: 30px;
  }
}
.item_wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  .item_frame {
    display: flex;
    flex-direction: row;
    padding-left: 1.5%;
  }
}
</style>
