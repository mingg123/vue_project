<template>
  <div class="banner_wrap">
    <span class="title">1+1 패키지</span>
    <span class="subTitle">퀴츠와 에리스 구입 기회를 놓치지 마세요!</span>
    <div class="btn_wrap">
      <div class="buyBtn_container">
        <img src="../../assets/image/diamond.png" style="height: 150px" />
        <StyledButton
          label="바로가기"
          :bgColor="'#FFD200'"
          width="180"
          height="50"
          link="goDirect"
        />
      </div>
      <div class="buyBtn_container">
        <img src="../../assets/image/money.png" style="height: 150px" />
        <StyledButton
          label="바로가기"
          :bgColor="'#FFD200'"
          width="180"
          height="50"
          link="goDirect"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StyledButton from "@/components/utils/StyledButton.vue";

export default defineComponent({
  name: "Banner",
  components: { StyledButton },
  setup() {},
  methods: {},
});
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index.scss";

.banner_wrap {
  height: 100%;
  background-size: $background_image_width $background_image_height;
  background-image: url("../../assets/image/castleImage.jpg");
  text-align: center;
  z-index: 1;

  .title {
    font-size: $title_font_size;
    background: linear-gradient(to right top, #cbb8ee, #861657);
    color: transparent;
    -webkit-background-clip: text;
    position: absolute;
    font-weight: 900;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .subTitle {
    font-size: $subTitle_font_size;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    color: white;
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
    padding-top: 30%;
  }
}
</style>
