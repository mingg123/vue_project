<template>
  Attendance
  <div class="at_frame">
    <div v-for="attancance in attandanceInfo" :key="attancance">
      <div class="attandance_container">
        {{ attancance }}
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
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  dummyAttendance,
  dummyMonthAttandance,
  dummyTwoWeekAttandance,
} from "../types/dummy";
import { Attendance, Item } from "@/components/types";

export default defineComponent({
  name: "Attendance",
  setup() {
    const attandanceInfo = ref<Attendance[]>(dummyMonthAttandance);
    const getItemList = ref<Item[]>([]);
    return { attandanceInfo, getItemList };
  },
  methods: {
    addItem(attandanceId: string): void {
      const newAttandance = this.attandanceInfo.find(
        (attandance) => attandance.attandanceId === attandanceId
      );
      if (newAttandance) {
        this.changeAttandanceState(newAttandance);
        this.getItemList = [...this.getItemList, newAttandance.reward];
      }
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
.at_frame {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .attandance_container {
    border: 1px solid gray;
    width: 120px;
    height: 200px;
    margin: 5px;
  }
}

.finish {
  background-color: green;
}
</style>
