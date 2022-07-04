<template>
  <div class="shop_wrap">
    <Shop />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Shop from "../view/Shop.vue";

export default defineComponent({
  name: "ShopContainer",
  components: { Shop },
  methods: {},
});
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index.scss";

.shop_wrap {
  @extend .wrap;
  background-image: url("../../assets/image/shopImage.png");
  text-align: center;
}
</style>
