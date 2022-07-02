import { mount } from "@vue/test-utils";
import EventPeriodBanner from "@/components/utils/EventPeriodBanner.vue";
import { createI18n, LocaleMessages, useI18n, VueMessageType } from "vue-i18n";

function loadLocaleMessages(): LocaleMessages<VueMessageType> {
  const locales = require.context(
    "../../src/locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages: LocaleMessages<VueMessageType> = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key).default;
    }
  });
  return messages;
}

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: loadLocaleMessages(),
});

describe("EventPeriodBanner.vue", () => {
  it("i18n", () => {
    const wrapper = mount(EventPeriodBanner, {
      global: {
        plugins: [i18n],
      },
    });
    const title = wrapper.get(".title");
    expect(title.text()).toContain("event_period");
  });

  it("renders props startDate, endDate when passed", () => {
    const startDate = "07/21";
    const endDate = "09/23";
    const color = "new message3";
    const wrapper = mount(EventPeriodBanner, {
      global: {
        plugins: [i18n],
      },
      props: { startDate, endDate },
    });
    const title = wrapper.get(".title").text();
    const result = `event_period: ${startDate} ~ ${endDate}`;
    expect(title).toEqual(result);
  });
});
