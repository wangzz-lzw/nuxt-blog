<template>
  <div
    class="flex text-primary items-center gap-2 flex-row justify-between px-40 bg-background"
  >
    <NuxtLink
      v-for="menu in uiConfig.menus"
      :key="menu.name"
      :class="[
        'hover:text-[var(--primary)]/80',
        { 'menu-active': route.path === menu.path },
      ]"
      :to="menu.path"
    >
      {{ menu.name }}
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { useUiConfig } from "./uiconfig";
import { useRoute } from "vue-router";
const route = useRoute();
const uiConfig = useUiConfig();
</script>

<style scoped lang="scss"></style>
