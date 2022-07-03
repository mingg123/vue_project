<template>
  <div
    class="ac_wrap"
    :style="{ backgroundImage: 'url(' + backgroundImageUrl + ')' }"
  >
    <div class="event_wrap">
      <EventPeriodBanner
        :startDate="'2022/06/01'"
        :endDate="'12/31'"
        :color="'#8B4513'"
      />
    </div>
    <Achievement />
    <div class="popup_wrap" v-if="getShowItemPopup">
      <ItemPopup :item="getClickedItem" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import EventPeriodBanner from "@/components/common/EventPeriodBanner.vue";
import { GaspTargetElement, Quest } from "@/types";
import { dummyQuest } from "@/types/dummy";
import ItemZone from "@/components/common/ItemZone.vue";
import store from "@/store";
import { useI18n } from "vue-i18n";
import gsap from "gsap";
import { mapGetters } from "vuex";
import ItemPopup from "@/components/popup/ItemPopup.vue";
import Achievement from "../view/Achievement.vue";

export default defineComponent({
  name: "AchievementContainer",
  components: {
    ItemZone,
    EventPeriodBanner,
    ItemPopup,
    Achievement,
  },
  setup() {
    const localLang = store.getters.getLocalLang;
    const backgroundImageUrl = require(`../../assets/image/achievement/${localLang}/bg_honeyitem.png`);
    const t = useI18n();
    return { localLang, backgroundImageUrl, t };
  },
  computed: {
    ...mapGetters(["getShowItemPopup", "getClickedItem"]),
  },
});
</script>
<style lang="scss">
@import "../../assets/scss/index.scss";

.ac_wrap {
  @extend .wrap;
  .event_wrap {
    padding-left: $event_period_padding_left;
    position: absolute;
  }

  .ac_container {
    @extend .flex_column_center;
  }
}
</style>
