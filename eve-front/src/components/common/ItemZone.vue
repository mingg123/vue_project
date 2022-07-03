<template>
  <img
    class="at_image"
    :style="{ height: height, marginRight: '5px' }"
    :alt="item.id"
    :src="item.imageUrl"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Item } from "@/types";

export default defineComponent({
  name: "ItemZone",
  props: {
    item: Object as PropType<Item>,
    height: {
      type: String,
      default: "50px",
    },
  },
});
</script>
<style lang="scss">
.wrap {
}
</style>
