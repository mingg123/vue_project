<template>
  <div class="lnb_wrap">
    <!--    here is lnb-->
    <router-link to="/achievement">achievement</router-link>
    |
    <router-link to="/attendance">attendance</router-link>
    |
    <router-link to="/banner">banner</router-link>
    |
    <router-link to="/shop">shop</router-link>
    |
    <router-link to="/items">items</router-link>
  </div>
</template>


<script lang='ts'>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'LNB',
  data() {
  },
  methods: {},
})
</script>
<style lang="scss">
.lnb_wrap {
  width: 210px;
  height: 560px;
  border: 1px solid;
}
</style>