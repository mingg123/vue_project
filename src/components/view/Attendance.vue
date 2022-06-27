<template>
  <div class="at_wrap">
    <div class="select_container">
      <select class="day_select" @change="onChangeDay($event)">
        <option v-for="day in days" :value="day" :key="day">
          {{ day }}
        </option>
      </select>
    </div>
    <div class="at_container">
      <div class="at_frame">
        <div v-for="(attancance, idx) in attandanceInfo" :key="attancance">
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
                paddingTop: '20%',
                paddingRight: '40%',
              }"
            />
            <button
              :style="{ width: '110px', height: '30px', border: 0, outline: 0 }"
              @click="addItem(attancance.attandanceId)"
              :disabled="isFinishAttandance(attancance)"
              :class="attancance.status.toLowerCase()"
            ></button>
          </div>
        </div>
      </div>
    </div>
    <div class="popup_wrap" v-if="getItemPopup">
      <getItemPopup :item="getClickedItem" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  dummyAttendance,
  dummyMonthAttandance,
  dummyTwoWeekAttandance,
} from "../types/dummy";
import { Attendance, Item, VueEvent } from "@/components/types";
import EventPeriodBanner from "@/components/utils/EventPeriodBanner.vue";
import { mapGetters, useStore } from "vuex";
import store from "@/store";
import ItemZone from "@/components/utils/ItemZone.vue";
import getItemPopup from "@/components/dialog/getItemPopup.vue";

type days = "7일" | "14일" | "28일";

export default defineComponent({
  name: "Attendance",
  components: { getItemPopup, ItemZone },
  setup() {
    const store = useStore();
    const attandanceInfo = ref<Attendance[]>(dummyAttendance);
    const days: string[] = ["7일", "14일", "28일"];

    const clickedItem: Item | null = null;
    return { attandanceInfo, days, clickedItem };
  },
  methods: {
    addItem(attandanceId: string): void {
      const newAttandance = this.attandanceInfo.find(
        (attandance) => attandance.attandanceId === attandanceId
      );
      if (newAttandance) {
        this.changeAttandanceState(newAttandance);
        store.dispatch("setItem", newAttandance.reward);
        store.dispatch("setItemPopup", true);
        store.dispatch("setClickedItem", newAttandance.reward);
      }
    },

    getDummyDataFromDay(day: days): Attendance[] {
      if (day === "7일") {
        return dummyAttendance;
      } else if (day === "14일") {
        return dummyTwoWeekAttandance;
      } else {
        return dummyMonthAttandance;
      }
    },

    onChangeDay(e: VueEvent.Input<HTMLSelectElement>) {
      const clickedDay = e.target.value as days;
      this.attandanceInfo = this.getDummyDataFromDay(clickedDay);
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
  },
  computed: {
    ...mapGetters(["getItemPopup", "getClickedItem"]),
  },
});
</script>
<style lang="scss">
@import "../../assets/scss/index.scss";

.at_wrap {
  background-image: url("../../assets/image/attendance/bg_28days.png");
  height: 100%;
  background-size: $background_image_width $background_image_height;

  display: flex;
  flex-direction: column;
  align-items: center;

  .at_container {
    overflow-y: auto;
    height: 320px;
    margin-top: 16%;
  }

  h1 {
    color: darkblue;
  }

  .subTitle {
    font-size: $subTitle_font_size;
    color: #828282;
    font-weight: bold;
  }

  .select_container {
    padding-right: 2.5%;
    margin-left: auto;

    .day_select {
      width: 120px;
      height: 30px;
    }
  }

  .at_frame {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .day_container {
      // background-image: url("../../assets/image/attendance/day_bg.png");
      background-size: 110px 180px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid gray;
      width: 110px;
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
    }
  }

  .finish {
    background-image: url("../../assets/image/attendance/btn_finish_28days.png");
    background-size: 110px 30px;
  }

  .running {
    background-image: url("../../assets/image/attendance/btn_running_28days.png");
    background-size: 110px 30px;
  }

  .ready {
    background-image: url("../../assets/image/attendance/btn_ready_28days.png");
    background-size: 110px 30px;
  }
}

.popup_wrap {
  position: absolute;
  z-index: 9998;
  top: 20%;
  left: 30%;
}
</style>
