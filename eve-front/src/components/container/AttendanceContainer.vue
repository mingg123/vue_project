<template>
  <div
    class="at_wrap"
    :style="{ backgroundImage: 'url(' + backgroundImageUrl + ')' }"
  >
    <AttendanceComponent />
    <div class="popup_wrap" v-if="getShowItemPopup">
      <ItemPopup :item="getClickedItem" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { getDummyDataFromDay } from "../../types/dummy";
import { Attendance, day, GaspTargetElement, Item, VueEvent } from "@/types";
import { mapGetters, useStore } from "vuex";
import store from "@/store";
import ItemZone from "@/components/common/ItemZone.vue";
import { useI18n } from "vue-i18n";
import ItemPopup from "@/components/popup/ItemPopup.vue";
import AttendanceComponent from "../view/Attendance.vue";

export default defineComponent({
  name: "AttendanceContainer",
  components: { ItemPopup, ItemZone, AttendanceComponent },
  setup() {
    const store = useStore();
    const t = useI18n();
    // const attandanceInfo = ref<Attendance[]>(dummyAttendance);
    const selectedAttedanceDay = store.getters.getSelectedAttedanceDay;
    const attandanceInfo = ref<Attendance[]>(
      getDummyDataFromDay(selectedAttedanceDay)
    );
    const days: string[] = ["28", "14", "7"];

    const newDay = computed(() =>
      days.filter(day => day !== selectedAttedanceDay)
    );
    const localLang = store.getters.getLocalLang;

    const backgroundImageUrl = require(`../../assets/image/attendance/${localLang}/bg_28days.png`);

    return {
      attandanceInfo,
      days,
      selectedAttedanceDay,
      newDay,
      t,
      backgroundImageUrl,
      localLang,
    };
  },
  methods: {
    onChangeDay(e: VueEvent.Input<HTMLSelectElement>) {
      const clickedDay = e.target.value as day;
      store.dispatch("setSelectedAttedanceDay", clickedDay);
      console.log(clickedDay);
      this.attandanceInfo = getDummyDataFromDay(clickedDay);
    },
  },
  computed: {
    ...mapGetters(["getShowItemPopup", "getClickedItem"]),
  },
});
</script>

<style lang="scss">
@import "../../assets/scss/index.scss";
.at_wrap {
  @extend .wrap;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
