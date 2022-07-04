<template>
  <div class="select_container">
    <select class="day_select" @change="onChangeDay($event)">
      <option value="selectedAttedanceDay">
        {{ selectedAttedanceDay }} {{ $t("attadance.day") }}
      </option>
      <option v-for="day in newDay" :value="day" :key="day">
        {{ day }} {{ $t("attadance.day") }}
      </option>
    </select>
  </div>
  <div class="at_container">
    <TransitionGroup
      class="at_frame"
      appear
      tag="ul"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
    >
      <div
        v-for="(attancance, idx) in attandanceInfo"
        :key="attancance"
        :data-index="idx"
      >
        <div
          class="day_container"
          :style="{
            'background-image': `url(${require(`../../assets/image/attendance/day_bg${addItemClass(
              idx + 1
            )}.png`)})`,
          }"
        >
          <div class="at_day">{{ idx + 1 }} 일</div>
          <ItemZone :item="attancance.reward" />
          <img
            v-if="isFinishAttandance(attancance)"
            src="../../assets/image/attendance/stamp.png"
            :style="{
              position: 'absolute',
              paddingTop: '70%',
              paddingRight: '40%',
            }"
          />
          <button
            class="at_btn"
            :style="{
              backgroundImage: `url(${require(`../../assets/image/attendance/${localLang}/btn_${attancance.status.toLowerCase()}_28days.png`)})`,
            }"
            @click="addItem(attancance.attandanceId)"
            :disabled="isFinishAttandance(attancance) || getShowItemPopup"
          ></button>
        </div>
      </div>
    </TransitionGroup>
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
import gsap from "gsap";
import ItemPopup from "@/components/popup/ItemPopup.vue";

export default defineComponent({
  name: "Attendance",
  components: { ItemZone },
  setup() {
    const store = useStore();
    const t = useI18n();

    const selectedAttedanceDay = store.getters.getSelectedAttedanceDay;
    const attandanceInfo = ref<Attendance[]>(
      getDummyDataFromDay(selectedAttedanceDay)
    );
    const days: string[] = ["28", "14", "7"];
    const localLang = store.getters.getLocalLang;

    const newDay = computed(() =>
      days.filter((day) => day !== selectedAttedanceDay)
    );

    return {
      attandanceInfo,
      days,
      t,
      localLang,
      selectedAttedanceDay,
      newDay,
    };
  },
  methods: {
    addItem(attandanceId: string): void {
      const newAttandance = this.attandanceInfo.find(
        (attandance) => attandance.attandanceId === attandanceId
      );
      if (newAttandance) {
        this.changeAttandanceState(newAttandance);
        console.log(newAttandance.reward);
        store.dispatch("setItem", newAttandance.reward);
        store.dispatch("setShowItemPopup", true);
        store.dispatch("setClickedItem", newAttandance.reward);
      }
    },

    onChangeDay(e: VueEvent.Input<HTMLSelectElement>) {
      const clickedDay = e.target.value as day;
      store.dispatch("setSelectedAttedanceDay", clickedDay);
      console.log(clickedDay);
      this.attandanceInfo = getDummyDataFromDay(clickedDay);
    },

    changeAttandanceState(attandance: Attendance): void {
      attandance.status = "FINISH";
    },
    addItemClass(idx: number): string {
      if (idx === 28) {
        return "_28";
      } else if (idx % 7 === 0) {
        return "_7";
      } else {
        return "";
      }
    },
    isFinishAttandance(attandance: Attendance): boolean {
      return attandance.status === "FINISH" ? true : false;
    },

    onBeforeEnter(el: GaspTargetElement): void {
      el.style.setProperty("opacity", "0");
    },
    onEnter(el: GaspTargetElement): void {
      gsap.to(el, {
        opacity: 1,
        delay: el.dataset.index * 0.05,
      });
    },
  },
  computed: {
    ...mapGetters(["getShowItemPopup"]),
  },
});
</script>

<style lang="scss">
@import "../../assets/scss/index.scss";

.select_container {
  position: absolute;
  left: 82%;
  .day_select {
    width: 120px;
    height: 30px;
  }
}

.at_container {
  overflow-y: auto;
  height: 310px;
  margin-top: 20.5%;
  margin-right: 4%;
}

.at_container::-webkit-scrollbar {
  display: none;
}

.at_container h1 {
  color: darkblue;
}

.at_frame {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .day_container {
    @extend .flex_column_center;
    background-size: $attendance_container_width 180px;
    border: 1px solid gray;
    width: $attendance_container_width;
    height: 130px;
    margin: 5px;
    position: relative;

    .at_day {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex: 1;
      width: 100%;
      color: white;
      font-weight: bold;
    }

    .at_image {
      height: 70px;
      flex: 1;
      padding-left: 10%;
      padding-bottom: 10%;
    }
    .at_btn {
      height: 30px;
      border: 0;
      outline: 0;
      background-size: $attendance_container_width 30px;
      width: $attendance_container_width;
    }
  }
}
</style>
