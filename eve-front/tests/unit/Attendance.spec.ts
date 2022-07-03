import { mount } from "@vue/test-utils";
import { i18nForTest } from "./EventPeriodBanner.spec";
import Attendance from "@/components/view/Attendance.vue";
import store from "@/store";
import { nextTick } from "vue";
import { dummyItem } from "@/types/dummy";

describe("Attadance Page", () => {
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

  it("getShowItemPopup in Store", () => {
    const wrapper = mount(Attendance, {
      global: {
        plugins: [i18nForTest, store],
      },
    });
    wrapper.find(".at_btn").trigger("click");
    nextTick().then(dat => {
      expect(store.getters.getShowItemPopup).toBe(true);
    });
  });

  it("Match setItem and clickedItem", async () => {
    const wrapper = mount(Attendance, {
      global: {
        plugins: [i18nForTest, store],
      },
    });
    const dummy = {
      amount: 100,
      code: "1",
      id: "0",
      imageUrl:
        "https://qa-eve.nexon.com/eve/ui/images/konosuba/achievement/honeyItem/quartz_100.png",
      name: "quartz",
      type: "ITEM",
    };
    await store.dispatch("setItem", dummy);
    dummy.id = store.getters.getClickedItem.id;
    expect(store.getters.getClickedItem).toEqual(dummy);
  });

  it("Check init selected Day", async () => {
    const wrapper = mount(Attendance, {
      global: {
        plugins: [i18nForTest, store],
      },
    });
    const options = wrapper.find(".day_select").find("option");
    expect(options.text().split(" ")[0]).toBe(
      store.getters.getSelectedAttedanceDay
    );
  });
});

it("dispatch setItem in Store", async () => {
  const wrapper = mount(Attendance, {
    global: {
      plugins: [i18nForTest, store],
    },
  });

  await store.dispatch("setItem", dummyItem[0]);
});
