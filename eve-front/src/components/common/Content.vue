<template>
  <div class="content_wrap">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import store from "@/store";

export default defineComponent({
  name: "Content",
  data() {
    const store = useStore();
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index.scss";
.content_wrap {
  width: $background_image_width;
  height: $background_image_height;
  position: relative;
  margin-left: 3.5%;
}

//스크롤바 기능 작동은 하지만 숨김
.content_wrap::-webkit-scrollbar {
  display: none;
}
</style>
