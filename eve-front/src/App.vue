<template>
  <v-app>
    <v-main>
      <img
        src="./assets/image/common/calendar.png"
        class="popup_btn"
        v-on:click="onClickPopup"
      />
      <Frame v-if="showFramePopup" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Frame from "@/components/container/Frame.vue";
import { useStore } from "vuex";
import store from "@/store";

export default defineComponent({
  name: "App",

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
  height: 50px;
  width: 50px;
}
</style>
