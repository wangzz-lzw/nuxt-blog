<template>
  <div class="px-4 py-2 h-screen bg-background">
    <Header v-if="!route.path.includes('detail')" />
    <div class="flex flex-col gap-4 mt-4">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from "./components/header/index.vue";
const route = useRoute();
</script>

<style scoped lang="scss"></style>
