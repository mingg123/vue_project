<template>
  <h1 class="title">이벤트 기간 : {{ startDate }} ~ {{ endDate }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventPeriodBanner",
  props: {
    startDate: String,
    endDate: String,
  },
  data() {},
  methods: {},
});
</script>
<style lang="scss">
.title {
  color: navy;
  text-decoration: underline;
  font-size: medium;
}
</style>
