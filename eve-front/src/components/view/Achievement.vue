<template>
  <div class="ac_container">
    <div class="quest_main_container">
      <TransitionGroup
        appear
        tag="ul"
        :css="false"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
      >
        <div
          class="quest_container"
          v-for="(quest, index) in quests"
          :key="quest"
          :class="quest.status"
          :data-index="index"
        >
          <img
            v-if="quest.status !== 'READY'"
            class="status_icon"
            src="../../assets/image/incomplete.png"
          />
          <img
            v-else
            class="status_icon"
            src="../../assets/image/complete.png"
          />
          <div class="quest_content">
            <div class="quest_inner">
              <span class="quest_title">
                {{ $t(`achievement.${quest.title}`) }}
              </span>
              <span>{{ $t(`achievement.${quest.subTitle}`) }}</span>
            </div>
          </div>
          <div class="quest_item">
            <ItemZone v-if="quest.reward" :item="quest.reward" />
          </div>
          <div class="quest_btn">
            <img
              :src="
                require(`../../assets/image/achievement/${localLang}/btn_reward_${quest.status.toLowerCase()}.png`)
              "
              @click="addItem(quest.id)"
              :disabled="getShowItemPopup"
            />
          </div>
        </div>
      </TransitionGroup>
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

export default defineComponent({
  name: "Achievement",
  components: {
    ItemZone,
  },
  setup() {
    const quests = ref<Quest[]>(dummyQuest);
    const localLang = store.getters.getLocalLang;
    const t = useI18n();
    return { quests, localLang, t };
  },
  methods: {
    addItem(questId: string): void {
      const newQuest = this.quests.find((quest) => quest.id === questId);
      if (newQuest && newQuest.status === "READY") {
        this.changeQuestState(newQuest);
        store.dispatch("setItem", newQuest.reward);
        store.dispatch("setShowItemPopup", true);
        store.dispatch("setClickedItem", newQuest.reward);
        console.log("newQuest rewoard");
      }
    },

    changeQuestState(quest: Quest): void {
      quest.status = "FINISH";
    },

    onBeforeEnter(el: GaspTargetElement): void {
      el.style.setProperty("opacity", "0");
      el.style.setProperty("height", "0");
    },
    onEnter(el: GaspTargetElement): void {
      gsap.set(el, {
        x: "20%",
      });
      gsap.to(el, {
        x: 0,
        opacity: 1,
        height: "80px",
        delay: el.dataset.index * 0.1,
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

.ac_wrap {
  @extend .wrap;

  .ac_container {
    @extend .flex_column_center;
  }

  .quest_main_container {
    overflow-y: auto;
    height: 300px;
    margin-top: 22%;
    padding-right: 5%;
    .quest_container {
      @extend .flex_row_center;
      background-size: $acheive_quest_width $acheive_quest_height;
      background-image: url("../../assets/image/achievement/quest_bg.png");
      height: $acheive_quest_height;
      width: $acheive_quest_width;
      margin-bottom: 10px;

      .status_icon {
        padding-left: 3%;
      }
      .quest_content {
        @extend .flex_column;
        flex: 7;

        .quest_inner {
          @extend .flex_column;
          padding-left: 10%;

          .quest_title {
            font-size: x-large;
            font-weight: 700;
          }
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
    }
  }

  .quest_main_container::-webkit-scrollbar {
    display: none;
  }
}
</style>
