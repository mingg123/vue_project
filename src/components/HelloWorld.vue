<template>
  <button v-on:click="onClickPopup">
    클릭
  </button>
  <Frame v-if="this.$store.state.isShowPopup"/>

</template>

<script lang='ts'>
import {computed, defineComponent} from 'vue'
import {useStore} from 'vuex';
import store from "@/store";
// import MainFrame from "./container/MainFrame.vue"
import Frame from "@/components/container/Frame.vue";


export default defineComponent({
  name: 'HelloWorld',
  components: {Frame},
  data () {
    const store = useStore();
    const isShowPopup = computed(() => {
      return store.getters.getIsShowPopup;
    }).value
    console.log(isShowPopup)
    return {
      isShowPopup
    }
  },
  methods : {
    onClickPopup : function() {
      store.dispatch('setIsShowPopup', true);
    }
  },
})
</script>
