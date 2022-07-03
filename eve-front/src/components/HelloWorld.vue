<template>
  <img
    src="../assets/image/common/calendar.png"
    class="popup_btn"
    v-on:click="onClickPopup"
  />
  <Frame v-if="showFramePopup" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import Frame from "@/components/container/Frame.vue";
import store from "@/store";

export default defineComponent({
  name: "HelloWorld",
  components: { Frame },
  setup() {
    const store = useStore();
    return {
      showFramePopup: computed(() => store.getters.getShowFramePopup),
    };
  },
  methods: {
    onClickPopup: function () {
      store.dispatch("setShowFramePopup", true);
    },
  },
});
</script>
<style lang="scss">
.popup_btn {
  width: 70px;
  height: 50px;
}
</style>
