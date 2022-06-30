<template>
  <div class="setting_wrap">
    <div class="setting_container">
      <h1>{{ $t("language_setting") }}</h1>
      <div class="select_wrap">
        <h2 class="subTitle">{{ $t("lang_select") }}</h2>
        <select
          v-model="selectedValue"
          class="select_inner"
          @change="onChangeLang($event)"
        >
          <option
            v-for="(lang, idx) in langs"
            :key="`Lang${idx}`"
            :value="lang"
          >
            <!-- {{ lang }} -->
            {{ getLagnuageType(lang) }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import store from "@/store";
import { defineComponent, ref } from "@vue/runtime-core";
import { useI18n } from "vue-i18n";
import { language, languageJson, VueEvent } from "../types";

export default defineComponent({
  name: "Setting",
  setup() {
    const t = useI18n();

    const selectedValue = ref(store.getters.getLocalLang);
    return { langs: ["en", "ko"], t, selectedValue };
  },
  methods: {
    onChangeLang(event: VueEvent.Input<HTMLSelectElement>) {
      const lang = event.target.value as languageJson;
      if (lang) {
        this.$i18n.locale = lang;
        store.dispatch("setLocalLang", lang);
      }
    },
    getLagnuageType(lang: languageJson): language {
      if (lang === "en") {
        return "English";
      } else {
        return "Korean";
      }
    },
  },
});
</script>
<style lang="scss" scope>
@import "../../assets/scss/index.scss";
.setting_wrap {
  height: 100%;
  background-image: url("../../assets/image/common/contents_bg.png");
  background-size: $background_image_width $background_image_height;
  .setting_container {
    padding: 3%;
    text-align: left;
    .select_wrap {
      display: flex;
      .subTitle {
        width: 200px;
        text-align: center;
      }
      .select_inner {
        width: 120px;
        height: 50px;
        text-align: center;
      }
    }
  }
}
</style>
