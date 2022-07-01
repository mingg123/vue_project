<template>
  <img
    src="../assets/image/common/calendar.png"
    class="popup_btn"
    v-on:click="onClickPopup"
  />
  <Frame v-if="isShowPopup" />
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
      isShowPopup: computed(() => store.getters.getIsShowPopup),
    };
  },
  methods: {
    onClickPopup: function () {
      store.dispatch("setIsShowPopup", true);
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
