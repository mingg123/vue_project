<template>
  <div class="lnb_wrap">
    <div v-for="header in headers">
      <div class="lnb_container">
        <router-link :to="{path : header}">{{ header }}</router-link>
      </div>
    </div>
  </div>
</template>


<script lang='ts'>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'LNB',
  data() {
    const headers = ['achievement', 'attendance', 'banner', 'shop', 'items']
    return {headers}
  },
  methods: {},
})
</script>
<style lang="scss">
.lnb_wrap {
  width: 210px;
  height: 560px;
  border: 1px solid;

  .lnb_container {
    height: 80px;
    background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
    }

  }
}
</style>