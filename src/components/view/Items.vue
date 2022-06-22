<template>
  Item
  <div v-for="item in items" :key="item.id">
    <li>
      {{ item }}
      <button @click="removeItem(item.id)">삭제</button>
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import { Item } from "@/components/types";
// import { dummyItem } from "@/components/types/dummy";
import { useStore } from "vuex";
import { Item } from "@/components/types";

export default defineComponent({
  name: "Items",
  setup() {
    const store = useStore();
    const items = store.getters.getItems as Item[];
    // const items = ref<Item[]>(dummyItem);
    return { items };
  },

  methods: {
    removeItem(id: string) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  },
});
</script>
<style lang="scss">
.wrap {
}
</style>
