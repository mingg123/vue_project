<template>
  <div class="ac_wrap">
    <h1>코노스바 런칭 기념 팡파레~!</h1>
    <span class="subTitle">
      매일 퀘스트 완료하고 매일 아이템도 받아가세요!
    </span>
    <EventPeriodBanner :startDate="'2022/06/14'" :endDate="'06/27'" />
    <div
      class="quest_container"
      v-for="quest in quests"
      :key="quest"
      :class="quest.status"
    >
      <div class="quest_content">
        <div class="quest_inner">
          <span class="quest_title">{{ quest.title }}</span>
          <span>{{ quest.subTitle }}</span>
        </div>
      </div>
      <div class="quest_item">
        <ItemZone v-if="quest.reward" :item="quest.reward" />
      </div>
      <div class="quest_btn">
        <button
          class="quest_btn_inner"
          :class="'btn_' + quest.status"
          :disabled="quest.status !== 'READY'"
          @click="addItem(quest.id)"
        >
          {{ getQuestState(quest.status) }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import EventPeriodBanner from "@/components/utils/EventPeriodBanner.vue";
import { Item, Quest, QuestStatusType } from "@/components/types";
import { dummyQuest } from "@/components/types/dummy";
import ItemZone from "@/components/utils/ItemZone.vue";
import store from "@/store";

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
    addItem(questId: string): void {
      const newQuest = this.quests.find((quest) => quest.id === questId);
      if (newQuest) {
        this.changeQuestState(newQuest);
        store.dispatch("setItem", newQuest.reward);
      }
    },

    changeQuestState(quest: Quest) {
      quest.status = "FINISH";
    },
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

  .READY {
    background-color: #d2e1ff;
  }

  .quest_container {
    display: flex;
    height: 80px;
    width: 900px;
    border: 1px solid;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;

    .quest_content {
      display: flex;
      flex-direction: column;
      flex: 8;

      .quest_inner {
        display: flex;
        flex-direction: column;
        padding-left: 10%;

        .quest_title {
          font-size: x-large;
          font-weight: 700;
        }
      }
    }

    .quest_item {
      flex: 1;
    }

    .quest_btn {
      flex: 2;

      .quest_btn_inner {
        width: 120px;
        height: 40px;
        font-weight: bold;
      }

      .btn_READY {
        color: white;
        background-color: royalblue;
        border-width: 1px;
        box-shadow: 1px 1px 1px 1px;
      }
    }
  }
}
</style>
