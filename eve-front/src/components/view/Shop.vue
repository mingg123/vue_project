<template>
  <div class="buyBtn_container">
    <StyledButton
      label="구매하러 가기"
      :bgColor="'#FFD200'"
      width="400"
      height="80"
      link="goShop"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StyledButton from "@/components/common/StyledButton.vue";

export default defineComponent({
  name: "Shop",
  components: { StyledButton },
});
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index.scss";

.buyBtn_container {
  @extend .flex_column_center;
  padding-top: 50%;
}
</style>
