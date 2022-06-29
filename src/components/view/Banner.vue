<template>
  <div
    class="banner_wrap"
    :style="{ backgroundImage: 'url(' + backgroundImageUrl + ')' }"
  >
    <div class="event_wrap">
      <EventPeriodBanner :startDate="'2022/06/14'" :endDate="'06/27'" />
    </div>
    <div class="btn_wrap">
      <div class="buyBtn_container">
        <a href="https://www.naver.com/">
          <img
            :src="
              require(`../../assets/image/banner/${localLang}/banner_btn_adventurer_support.png`)
            "
          />
        </a>
      </div>
    </div>
    <a v-if="localLang === 'ko'" href="" class="cancellation-btn">
      [청약 철회 규정 보기]
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventPeriodBanner from "@/components/utils/EventPeriodBanner.vue";
import { useI18n } from "vue-i18n";
import store from "@/store";

export default defineComponent({
  name: "Banner",
  components: { EventPeriodBanner },
  setup() {
    const t = useI18n();
    const localLang = store.getters.getLocalLang;
    const backgroundImageUrl = require(`../../assets/image/banner/${localLang}/bg_step_pack_1.png`);
    return { t, localLang, backgroundImageUrl };
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index.scss";

.banner_wrap {
  height: 100%;
  background-size: $background_image_width $background_image_height;
  // background-image: url("../../assets/image/bg_step_pack_1.png");
  text-align: center;
  z-index: 1;

  .event_wrap {
    padding-left: $event_period_padding_left;
    position: absolute;
  }

  .btn_wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10%;
  }

  .buyBtn_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 38%;
  }

  .cancellation-btn {
    padding-left: 25%;
    position: absolute;
    padding-top: 2%;
    color: #00f5ff;
  }
}
</style>
