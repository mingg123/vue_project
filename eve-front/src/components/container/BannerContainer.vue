<template>
  <div
    class="banner_wrap"
    :style="{ backgroundImage: 'url(' + backgroundImageUrl + ')' }"
  >
    <div class="event_wrap">
      <EventPeriodBanner :startDate="'2022/06/14'" :endDate="'06/27'" />
    </div>
    <Banner />
    <a v-if="localLang === 'ko'" href="" class="cancellation-btn">
      [청약 철회 규정 보기]
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventPeriodBanner from "@/components/common/EventPeriodBanner.vue";
import { useI18n } from "vue-i18n";
import Banner from "../view/Banner.vue";
import store from "@/store";

export default defineComponent({
  name: "BannerContainer",
  components: { EventPeriodBanner, Banner },
  setup() {
    const t = useI18n();
    const localLang = store.getters.getLocalLang;
    const backgroundImageUrl = require(`../../assets/image/banner/${localLang}/bg_step_pack_1.png`);
    return { t, backgroundImageUrl };
  },
});
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index.scss";

.banner_wrap {
  height: 100%;
  background-size: $background_image_width $background_image_height;
  text-align: center;
  z-index: 1;

  .event_wrap {
    padding-left: $event_period_padding_left;
    position: absolute;
  }
}
</style>
