<template>
  <div class="frame_wrap">
    <div class="frame_container">
      <LNB/>
      <Content/>
    </div>

  </div>

</template>

<script lang='ts'>
import {defineComponent} from "vue";
import LNB from "@/components/common/LNB.vue";
import Content from "@/components/common/Content.vue";

export default defineComponent({
  name: 'Frame',
  components: {Content, LNB},
})
</script>
<style lang="scss">
.frame_wrap {
  width: 1200px;
  height: 580px;
  border: 1px solid;
  .frame_container {
    margin : 10px;
    display: flex;
  }
}

</style>