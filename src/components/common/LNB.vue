<template>
  <div class="lnb_wrap">
    <div v-for="header in headers" :key="header">
      <li class="lnb_container">
        <router-link :to="{ path: header.path }">
          {{ header.title }}
        </router-link>
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LNB",
  setup() {
    const headers = [
      { path: "achievement", title: "이 멋진 세계에 매일 꿀템을" },
      { path: "attendance", title: "월간 로그인 보너스" },
      { path: "banner", title: "성장 부스터 팩" },
      { path: "shop", title: "첫 구매 보너스" },
      { path: "items", title: "아이템" },
      { path: "trash", title: "휴지통" },
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
