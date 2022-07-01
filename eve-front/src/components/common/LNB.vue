<template>
  <div class="lnb_wrap">
    <img :src="require(`../../assets/image/common/${getLocalLang}/bi.png`)" />
    <div class="lnb_container">
      <div v-for="header in headers" :key="header">
        <li class="lnb_inner">
          <router-link :to="{ path: header.path }">
            {{ $t(header.title) }}
          </router-link>
        </li>
      </div>
    </div>
    <img src="../../assets/image/common/navi_more_btn.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { mapGetters } from "vuex";

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
      { path: "test1", title: "test1" },
      { path: "test2", title: "test2" },
    ];

    return { headers };
  },
  computed: {
    ...mapGetters(["getLocalLang"]),
  },
});
</script>
<style lang="scss">
@import "../../assets/scss/index.scss";
.lnb_wrap {
  width: $lnb_bg_width;
  height: 560px;
  border: 1px solid;
  padding-left: 7.3%;
  text-align: center;
  .lnb_container {
    height: 420px;
    overflow-y: auto;
    .lnb_inner {
      height: $lnb_bg_height;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url("../../assets/image/common/btn_lnb_off.png");
      background-size: $lnb_bg_width $lnb_bg_height;
      a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: white;
        text-decoration: none;
      }

      a.router-link-active.router-link-exact-active {
        background-image: url("../../assets/image/common/btn_lnb_on.png");
        background-size: $lnb_bg_width $lnb_bg_height;
      }
    }
  }
  .lnb_container::-webkit-scrollbar {
    display: none;
  }
}
</style>
