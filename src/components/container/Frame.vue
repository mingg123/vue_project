<template>
  <div class="frame_wrap">
    <div class="frame_container">
      <div class="btn_wrap">
        <img alt="close_btn" class="btn_close" src="../../assets/image/close.png" @click="onClose"/>
      </div>
      <div class="frame_inner">
        <LNB/>
        <Content/>
      </div>
    </div>
  </div>

</template>

<script lang='ts'>
import {defineComponent} from "vue";
import LNB from "@/components/common/LNB.vue";
import Content from "@/components/common/Content.vue";
import store from "@/store";
import {useStore} from "vuex";


export default defineComponent({
  name: 'Frame',
  components: {Content, LNB},
  data() {
    const store = useStore();
  },
  methods: {
    onClose: function () {
      store.dispatch('setIsShowPopup', false);
    }
  }
})
</script>
<style lang="scss">
.frame_wrap {
  width: 1280px;
  height: 720px;

  .frame_container {
    width: 1200px;
    height: 620px;
    border: 1px solid;
    display: flex;
    flex-direction: column;

    .btn_wrap {


      .btn_close {
        height: 30px;
        width: 30px;
      }
    }

    .frame_inner {
      //margin: 10px;
      display: flex;
    }
  }

}

</style>