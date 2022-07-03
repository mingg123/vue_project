import { nextTick } from "vue";
import store from "@/store";
import { mount } from "@vue/test-utils";
import Attendance from "@/components/view/Attendance.vue";
import AttendanceContainer from "@/components/container/AttendanceContainer.vue";
import { i18nForTest } from "./EventPeriodBanner.spec";

describe("AttendanceContainer Page", () => {
  it("Item popup before button click", async () => {
    const wrapper = mount(Attendance, {
      global: {
        plugins: [i18nForTest, store],
      },
    });
    const container = mount(AttendanceContainer, {
      global: {
        plugins: [i18nForTest, store],
      },
    });
    wrapper.find(".at_btn").trigger("click");
    await nextTick();
    expect(container.find(".popup_wrap").exists()).toBe(true);
  });
});
