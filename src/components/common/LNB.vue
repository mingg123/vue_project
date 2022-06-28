<template>
  <div class="lnb_wrap">
    <div v-for="header in headers" :key="header">
      <li class="lnb_container">
        <router-link :to="{ path: header.path }">
          {{ $t(header.title) }}
        </router-link>
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "LNB",
  setup() {
    const t = useI18n();
    const headers = [
      { path: "achievement", title: "achievement_router" },
      { path: "attendance", title: "attendance_router" },
      { path: "banner", title: "banner_router" },
      { path: "shop", title: "shop_router" },
      { path: "items", title: "items_router" },
      { path: "trash", title: "trash_router" },
      { path: "setting", title: "setting_router" },
    ];

    return { headers };
  },

  methods: {},
});
</script>
<style lang="scss">
.lnb_wrap {
  width: 210px;
  height: 560px;
  border: 1px solid;

  .lnb_container {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2fd4b6;
    border-bottom: 0.5px solid #2fd4b6;

    a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      background-color: #133550;
      color: #35bfa8;
      text-decoration: none;
    }

    a.router-link-active.router-link-exact-active {
      background: linear-gradient(to right, #6ba6ae, #518086);
      color: #ffe14f;
    }
  }
}
</style>
