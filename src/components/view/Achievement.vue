<template>
  Achievement
  <EventPeriodBanner :startDate="'2022/06/14'" :endDate="'06/27'"/>
</template>


<script lang='ts'>
import {defineComponent} from "vue";
import EventPeriodBanner from "@/components/utils/EventPeriodBanner.vue";

export default defineComponent({
  name: 'Achievement',
  components: {
    EventPeriodBanner
  },
  data() {
  },
  methods: {},
})
</script>