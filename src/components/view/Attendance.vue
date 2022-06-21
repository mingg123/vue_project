<template>
  <div class="at_wrap">
    <h1>스페셜 로그인 보너스</h1>
    <span class="subTitle">
      모험을 떠나시는 모험가님! 출석하고 보상 전부 받아가세요!
    </span>
    <EventPeriodBanner :startDate="'2022.06.13'" :endDate="'07.13'" />
    <div class="select_container">
      <select class="day_select" @change="onChangeDay($event)">
        <option v-for="day in days" :value="day" :key="day">
          {{ day }}
        </option>
      </select>
    </div>
    <div class="at_frame">
      <div v-for="attancance in attandanceInfo" :key="attancance">
        <div class="at_container">
          <!--          attadance 내부-->
          <div class="at_day">{{ attancance.day }} 일차</div>
          <img
            class="at_image"
            style="height: 50px"
            :alt="attancance.reward.id"
            :src="require(`../../assets/image/` + attancance.reward.imageUrl)"
          />
          <!--          <img-->
          <!--            :alt="attancance.reward.id"-->
          <!--            src="../../assets/image/shopImage.png"-->
          <!--          />-->
          <span>X {{ attancance.reward.amount }}</span>
          <button
            @click="addItem(attancance.attandanceId)"
            :disabled="attancance.status === 'FINISH'"
            :class="[attancance.status === 'FINISH' ? 'finish' : null]"
          >
            보상 받기
          </button>
        </div>
      </div>
    </div>
    <div>얻은 item List</div>
    <div v-for="item in getItemList" :key="item.id">
      <li>{{ item }}</li>
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

type days = "7일" | "14일" | "28일";

export default defineComponent({
  name: "Attendance",
  components: { EventPeriodBanner },
  setup() {
    const attandanceInfo = ref<Attendance[]>(dummyAttendance);
    const getItemList = ref<Item[]>([]);
    const days: string[] = ["7일", "14일", "28일"];

    return { attandanceInfo, getItemList, days };
  },
  methods: {
    addItem(attandanceId: string): void {
      const newAttandance = this.attandanceInfo.find(
        attandance => attandance.attandanceId === attandanceId
      );
      if (newAttandance) {
        this.changeAttandanceState(newAttandance);
        this.getItemList = [...this.getItemList, newAttandance.reward];
      }
    },

    getDummyDataFromDay(day: days) {
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
  },
  computed: {
    addItemClass(attancance: Attendance): string | null {
      return attancance.status === "FINISH" ? "finish" : null;
    },
  },
});
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index.scss";

.at_wrap {
  display: flex;
  flex-direction: column;
  align-items: center;

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

    .at_container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid gray;
      width: 120px;
      height: 200px;
      margin: 5px;

      .at_day {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 30px;
        background-color: #41cdcd;
        opacity: 0.8;
        color: black;
        font-weight: bold;
      }

      .at_image {
        height: 70px;
        padding-top: 20px;
        padding-bottom: 10px;
      }
    }
  }

  .finish {
    background-color: green;
  }
}
</style>
