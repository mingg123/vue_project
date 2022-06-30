<template>
  <h1 class="title" :style="{ color: color }">
    {{ $t("event_period") }}: {{ startDate }} ~ {{ endDate }}
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "EventPeriodBanner",
  props: {
    startDate: String,
    endDate: String,
    color: String,
  },
  setup() {
    const t = useI18n();
    return { t };
  },
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
