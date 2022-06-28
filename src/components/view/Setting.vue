<template>
  <div class="setting_wrap">
    <h1>{{ $t("language_setting") }}</h1>
    <div class="select_wrap">
      <h2 class="subTitle">{{ $t("lang_select") }}</h2>
      <select class="select_inner" @change="onChangeLang($event)">
        <option v-for="(lang, idx) in langs" :key="`Lang${idx}`" :value="lang">
          {{ lang }}
        </option>
      </select>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useI18n } from "vue-i18n";
import { VueEvent } from "../types";

type language = "English" | "Korean";
type languageJson = "en" | "ko";

export default defineComponent({
  name: "Setting",
  setup() {
    const t = useI18n();
    return { langs: ["English", "Korean"], t };
  },
  methods: {
    getLagnuageType(lang: language): languageJson {
      if (lang === "English") {
        return "en";
      } else {
        return "ko";
      }
    },
    onChangeLang(event: VueEvent.Input<HTMLSelectElement>) {
      const lang = event.target.value as language;
      if (lang) this.$i18n.locale = this.getLagnuageType(lang);
    },
  },
});
</script>
<style lang="scss" scope>
.setting_wrap {
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
</style>
