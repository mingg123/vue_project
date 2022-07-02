import { mount } from "@vue/test-utils";
import { i18nForTest } from "./EventPeriodBanner.spec";
import Attendance from "@/components/view/Attendance.vue";
import store from "@/store";
import { nextTick } from "vue";
describe("Attadance ", () => {
  it("Check if button exists", () => {
    const wrapper = mount(Attendance, {
      global: {
        plugins: [i18nForTest, store],
      },
    });
    const btn = wrapper.find(".at_btn");
    expect(btn.exists()).toBe(true);
  });

  it("Item popup before button click", () => {
    const wrapper = mount(Attendance, {
      global: {
        plugins: [i18nForTest, store],
      },
    });
    expect(wrapper.find(".popup_wrap").exists()).toBe(false);
  });

  it("Item popup after button click", () => {
    const wrapper = mount(Attendance, {
      global: {
        plugins: [i18nForTest, store],
      },
    });
    wrapper.find(".at_btn").trigger("click");
    nextTick().then(dat => {
      expect(wrapper.find(".popup_wrap").exists()).toBe(true);
    });
  });
});
