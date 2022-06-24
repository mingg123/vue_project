<template>
  <div class="banner_wrap">
    <div class="event_wrap">
      <EventPeriodBanner :startDate="'2022/06/14'" :endDate="'06/27'" />
    </div>
    <div class="btn_wrap">
      <div class="buyBtn_container">
        <a href="https://www.naver.com/">
          <img src="../../assets/image/banner_btn_adventurer_support.png" />
        </a>
        <!--        <StyledButton-->
        <!--          label="9900원"-->
        <!--          :bgColor="'#FFD200'"-->
        <!--          width="180"-->
        <!--          height="50"-->
        <!--          link="goDirect"-->
        <!--        />-->
      </div>
    </div>
    <a href="" class="cancellation-btn"> [청약 철회 규정 보기] </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StyledButton from "@/components/utils/StyledButton.vue";
import EventPeriodBanner from "@/components/utils/EventPeriodBanner.vue";

export default defineComponent({
  name: "Banner",
  components: { EventPeriodBanner, StyledButton },
  setup() {},
  methods: {},
});
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index.scss";

.banner_wrap {
  height: 100%;
  background-size: $background_image_width $background_image_height;
  background-image: url("../../assets/image/bg_step_pack_1.png");
  text-align: center;
  z-index: 1;

  .event_wrap {
    padding-left: 5%;
    position: absolute;
  }

  .btn_wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10%;
  }

  .buyBtn_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 38%;
  }

  .cancellation-btn {
    padding-left: 25%;
    position: absolute;
    padding-top: 2%;
    color: #00f5ff;
  }
}
</style>
