import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Achievement from "@/components/view/Achievement.vue";
import Attendance from "@/components/view/Attendance.vue";
import Banner from "@/components/view/Banner.vue";
import Shop from "@/components/view/Shop.vue";
import Items from "@/components/view/Items.vue";
import Trash from "@/components/view/Trash.vue";

const routes: Array<RouteRecordRaw> = [
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
    path: "/trash",
    name: "trash",
    component: Trash,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
