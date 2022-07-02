import { mount } from "@vue/test-utils";
import EventPeriodBanner from "@/components/utils/EventPeriodBanner.vue";
import { createI18n, LocaleMessages, useI18n, VueMessageType } from "vue-i18n";
import { loadLocaleMessages } from "@/i18n";

export const i18nForTest = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: loadLocaleMessages(),
});

describe("EventPeriodBanner.vue", () => {
  it("i18n", () => {
    const wrapper = mount(EventPeriodBanner, {
      global: {
        plugins: [i18nForTest],
      },
    });
    const title = wrapper.get(".title");
    expect(title.text()).toContain("event_period");
  });

  it("renders props startDate, endDate when passed", () => {
    const startDate = "07/21";
    const endDate = "09/23";

    const wrapper = mount(EventPeriodBanner, {
      global: {
        plugins: [i18nForTest],
      },
      props: { startDate, endDate },
    });
    const title = wrapper.get(".title").text();
    const result = `event_period: ${startDate} ~ ${endDate}`;
    expect(title).toEqual(result);
  });
});
