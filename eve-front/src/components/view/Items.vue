<template>
  <div
    class="at_wrap"
    :style="{
      alignItems: 'flex-start',
      backgroundImage: `url(${require('../../assets/image/item/bg_anotherword.png')})`,
    }"
  >
    <div class="itemSelect_container">
      <select class="day_select" @change="onChangeSortOption($event)">
        <option v-for="option in sortOptions" :value="option" :key="option">
          {{ option }}
        </option>
      </select>
    </div>
    <div
      class="item_frame"
      :style="{
        display: 'flex',
        flexWrap: 'wrap',
        overflowY: 'auto',
        justifyContent: 'flex-start',
        paddingLeft: '10%',
      }"
    >
      <div
        class="at_frame"
        :style="{
          width: '130px',
          height: '130px',
          border: '1px solid',
          marginRight: '20px',
          marginTop: '20px',
          backgroundColor: 'bisque',
          borderRadius: '20%',
          border: '5px solid #E0904C',
        }"
        v-for="item in this.$store.state.items"
        :key="item.id"
      >
        <div
          class="at_container"
          :style="{
            marginLeft: '10%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }"
        >
          <ItemZone :item="item" :height="'71px'" />
          <button @click="removeItem(item.id)">삭제</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" scope>
import { defineComponent } from "vue";
import { VueEvent } from "@/types";
import ItemZone from "@/components/utils/ItemZone.vue";
import store from "@/store";

export default defineComponent({
  name: "Items",
  setup() {
    const sortOptions = ["가장오래된순", "가장최신순"];

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
});
</script>
<style lang="scss" scope>
.itemSelect_container {
  .day_select {
    width: 120px;
    height: 30px;
  }
}

.item_frame::-webkit-scrollbar {
  display: none;
}
</style>
