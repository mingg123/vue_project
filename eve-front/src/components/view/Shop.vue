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
  height: 100%;
  background-size: $background_image_width $background_image_height;
  background-image: url("../../assets/image/shopImage.png");
  text-align: center;

  .buyBtn_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50%;
  }
}
</style>
