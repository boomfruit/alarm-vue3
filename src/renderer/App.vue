<template>
  <div class="app-box">
    <title-bar />
    <TavigationBar></TavigationBar>
    <el-config-provider :locale="i18nt">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ElConfigProvider } from "element-plus";
import { i18n } from "./i18n";
import TitleBar from "./components/common/TitleBar.vue";
import TavigationBar from "./components/common/TavigationBar.vue";

const i18nt = computed(() => i18n.global.messages[i18n.global.locale].el);
</script>

<style>
.app-box {
  width: 100vw;
  height: 100vh;
  background-image: url("./assets/main/home_bg.png");
}
</style>
