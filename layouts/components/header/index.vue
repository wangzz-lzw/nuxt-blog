<template>
  <div
    class="flex text-primary items-center gap-2 flex-row justify-between pl-40 bg-background border-b-2 border-[var(--primary)]/10 py-2"
  >
    <NuxtLink
      v-for="menu in uiConfig.menus"
      :key="menu.name"
      :class="[
        'hover:text-[var(--primary)]/80 hover:bg-[var(--primary)]/10 px-4 py-1 rounded-lg',
        { 'menu-active': route.path === menu.path },
      ]"
      :to="menu.path"
    >
      {{ menu.name }}
    </NuxtLink>
    <div class="flex items-center gap-2">
      <Button>
        <NuxtLink to="/login" class="hover:bg-[var(--primary)]/60"
          >登陆</NuxtLink
        >
      </Button>

      <Button
        ><NuxtLink to="/register" class="hover:bg-[var(--primary)]/60"
          >注册</NuxtLink
        ></Button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUiConfig } from "./uiconfig";
import { useRoute } from "vue-router";
const route = useRoute();
const uiConfig = useUiConfig();
</script>

<style scoped lang="scss"></style>
