<template>
  <img
    class="at_image"
    style="height: 50px"
    :alt="item.id"
    :src="item.imageUrl"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Item } from "@/components/types";

export default defineComponent({
  name: "ItemZone",
  props: {
    item: Object as PropType<Item>,
  },
  setup() {},
  methods: {},
});
</script>
<style lang="scss">
.wrap {
}
</style>
