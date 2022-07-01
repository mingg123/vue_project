<template>
  <div class="frame_wrap">
    <div class="frame_container">
      <div class="btn_wrap">
        <img
          alt="close_btn"
          class="btn_close"
          src="../../assets/image/common/btn_close.png"
          @click="onClose"
        />
      </div>
      <div class="frame_inner">
        <LNB />
        <Content />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LNB from "@/components/common/LNB.vue";
import Content from "@/components/common/Content.vue";
import store from "@/store";
import { useStore } from "vuex";

export default defineComponent({
  name: "Frame",
  components: { Content, LNB },
  setup() {
    const store = useStore();
  },
  methods: {
    onClose: function () {
      store.dispatch("setIsShowPopup", false);
    },
  },
});
</script>
<style lang="scss">
.frame_wrap {
  width: 1280px;
  height: 720px;
  background-image: url("../../assets/image/common/frame_bg.png");
  background-size: 1280px 720px;
  .frame_container {
    //background-image: url("../../assets/image/common/frame_bg.png");
    //background-size: 1200px 620px;
    padding-top: 4%;
    width: 1200px;
    height: 620px;
    border: 1px solid;
    display: flex;
    flex-direction: column;

    .btn_wrap {
      padding-right: 2%;
      padding-top: 0.5%;
      .btn_close {
        height: 40px;
        width: 40px;
        float: right;
      }
    }

    .frame_inner {
      //margin: 10px;
      display: flex;
      height: 550px;
    }
  }
}
</style>
