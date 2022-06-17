<template>
  <div class="shop_wrap">
    <span class="title">첫 구매 보너스!</span>
    <span class="subTitle">이세계에서 새로운 모험을 떠나는 신규 모험가님을 위한 해택</span>
    <span class="subTitle" :style="{'top' : '35%'}">퀴즈 첫 구매시, 최소 3배 이상의 보너스 퀴즈 추가 지급!</span>
    <div class="buyBtn_container">
      <BuyButton label="구매하러 가기" bgcolor="#FFD200"/>

    </div>
  </div>

</template>


<script lang='ts'>
import {defineComponent} from "vue";
import EventPeriodBanner from "@/components/utils/EventPeriodBanner.vue";
import BuyButton from "@/components/utils/BuyButton.vue";

export default defineComponent({
  name: 'Shop',
  components: {BuyButton, EventPeriodBanner},
  data() {
  },
  methods: {},
})
</script>
<style lang="scss" scoped>
.shop_wrap {
  height: 100%;
  background-size: cover;
  background-image: url("../../assets/image/castleImage.jpg");
  text-align: center;

  .title {
    font-size: 60px;
    background: linear-gradient(to right top, #CBB8EE, #861657);
    color: transparent;
    -webkit-background-clip: text;
    position: absolute;
    font-weight: 900;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .subTitle {
    font-size: 15px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    color: white;
  }

  .buyBtn_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 45%;
  }
}


</style>