<template>
  <div class="content_wrap">
    <div class="btn_wrap">
      <img alt="close_btn" class="btn_close" src="../../image/close.png" @click="onClose"/>
    </div>
    <span>hihi</span>
    <div>bye</div>
  </div>
</template>


<script lang='ts'>
import {defineComponent} from "vue";
import {useStore} from "vuex";
import store from "@/store";

export default defineComponent({
  name: 'Content',
  data() {
    const store = useStore();
  },
  methods: {
    onClose: function () {
      store.dispatch('setIsShowPopup', false);
    }
  },
})
</script>
<style lang="scss">
.content_wrap {
  width: 960px;
  border: 1px solid;

  .btn_wrap {
    float: right;

    .btn_close {
      height: 50px;
      width: 50px;
    }
  }

}
</style>