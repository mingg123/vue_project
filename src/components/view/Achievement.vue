<template>
  <div class="ac_wrap">
    <h1>코노스바 런칭 기념 팡파레~!</h1>
    <span class="subTitle">
      매일 퀘스트 완료하고 매일 아이템도 받아가세요!
    </span>
    <EventPeriodBanner :startDate="'2022/06/14'" :endDate="'06/27'" />
    <div class="quest_container" v-for="quest in quests" :key="quest">
      <div class="quest_content">
        <span>{{ quest.title }}</span>
        <span>{{ quest.subTitle }}</span>
      </div>
      <div class="quest_item">
        <ItemZone v-if="quest.reward" :item="quest.reward" />
      </div>
      <div class="quest_btn">
        <button>{{ getQuestState(quest.status) }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import EventPeriodBanner from "@/components/utils/EventPeriodBanner.vue";
import { Quest, QuestStatusType } from "@/components/types";
import { dummyQuest } from "@/components/types/dummy";
import ItemZone from "@/components/utils/ItemZone.vue";

export default defineComponent({
  name: "Achievement",
  components: {
    ItemZone,
    EventPeriodBanner,
  },
  setup() {
    const quests = ref<Quest[]>(dummyQuest);
    return { quests };
  },
  methods: {
    getQuestState(stats: QuestStatusType): string {
      if (stats === "READY") {
        return "보상받기";
      } else if (stats === "RUNNING") {
        return "진행 중";
      } else {
        return "지급완료";
      }
    },
  },
});
</script>
<style lang="scss">
.ac_wrap {
  display: flex;
  flex-direction: column;
  align-items: center;

  .quest_container {
    display: flex;
    height: 80px;
    width: 900px;
    border: 1px solid;
    margin-bottom: 10px;

    .quest_content {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
