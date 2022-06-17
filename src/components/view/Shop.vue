<template>
  <EventPeriodBanner start-date="2022/06/14" end-date="06/27"/>
</template>


<script lang='ts'>
import {defineComponent} from "vue";
import EventPeriodBanner from "@/components/utils/EventPeriodBanner.vue";

export default defineComponent({
  name: 'Shop',
  components: {EventPeriodBanner},
  data() {
  },
  methods: {},
})
</script>