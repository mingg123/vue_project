import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Achievement from "@/components/view/Achievement.vue";
import Attendance from "@/components/view/Attendance.vue";
import Banner from "@/components/view/Banner.vue";
import Shop from "@/components/view/Shop.vue";
import Items from "@/components/view/Items.vue";
import Setting from "@/components/view/Setting.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/achievement",
  },
  {
    path: "/achievement",
    name: "achievement",
    component: Achievement,
  },
  {
    path: "/attendance",
    name: "attendance",
    component: Attendance,
  },
  {
    path: "/banner",
    name: "banner",
    component: Banner,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },
  {
    path: "/items",
    name: "items",
    component: Items,
  },
  {
    path: "/setting",
    name: "setting",
    component: Setting,
  },
  {
    path: "/test1",
    name: "test1",
    component: Setting,
  },
  {
    path: "/test2",
    name: "test2",
    component: Setting,
  },
  {
    path: "/test3",
    name: "test3",
    component: Setting,
  },
  {
    path: "/test4",
    name: "test4",
    component: Setting,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
