import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import AchievementContainer from "@/components/container/AchievementContainer.vue";
import AttendanceContainer from "@/components/container/AttendanceContainer.vue";
import BannerContainer from "@/components/container/BannerContainer.vue";
import ShopContainer from "@/components/container/ShopContainer.vue";
import ItemContainer from "@/components/container/ItemContainer.vue";
import SettingContainer from "@/components/container/SettingContainer.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/achievement",
  },
  {
    path: "/achievement",
    name: "achievement",
    component: AchievementContainer,
  },
  {
    path: "/attendance",
    name: "attendance",
    component: AttendanceContainer,
  },
  {
    path: "/banner",
    name: "banner",
    component: BannerContainer,
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopContainer,
  },
  {
    path: "/items",
    name: "items",
    component: ItemContainer,
  },
  {
    path: "/setting",
    name: "setting",
    component: SettingContainer,
  },
  {
    path: "/test1",
    name: "test1",
    component: SettingContainer,
  },
  {
    path: "/test2",
    name: "test2",
    component: SettingContainer,
  },
  {
    path: "/test3",
    name: "test3",
    component: SettingContainer,
  },
  {
    path: "/test4",
    name: "test4",
    component: SettingContainer,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
