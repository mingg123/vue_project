<template>
  <div class="content_wrap">
    <!--    <div class="btn_wrap">-->
    <!--      <img alt="close_btn" class="btn_close" src="../../assets/image/close.png" @click="onClose"/>-->
    <!--    </div>-->
    <router-view/>
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
  methods: {},
})
</script>
<style lang="scss" scoped>
.content_wrap {
  width: 960px;
  border: 1px solid;
  position: relative;
}
</style>