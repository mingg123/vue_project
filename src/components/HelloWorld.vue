<template>
  <button v-on:click="onClickPopup">Open</button>
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
