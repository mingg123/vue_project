<template>
  <div class="shop_wrap">
    <div class="buyBtn_container">
      <StyledButton
        label="구매하러 가기"
        :bgColor="'#FFD200'"
        width="400"
        height="80"
        link="goShop"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StyledButton from "@/components/common/StyledButton.vue";

export default defineComponent({
  name: "Shop",
  components: { StyledButton },
  setup() {},
  methods: {},
});
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index.scss";

.shop_wrap {
  @extend .wrap;
  background-image: url("../../assets/image/shopImage.png");
  text-align: center;

  .buyBtn_container {
    @extend .flex_column_center;
    padding-top: 50%;
  }
}
</style>
