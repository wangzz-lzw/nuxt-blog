<template>
  <div class="admin-layout flex">
    <div class="w-64 py-4">
      <nuxt-link
        to="/"
        class="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded"
      >
        返回前台
      </nuxt-link>
      <nav class="space-y-2 py-4">
        <a
          href="/admin/list"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
        >
          文章管理
        </a>
        <a
          href="/admin/createArticle"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
        >
          新增文章
        </a>
      </nav>
    </div>

    <div class="flex-1 p-6">
      <keep-alive>
        <slot />
      </keep-alive>
    </div>
  </div>
</template>

<script setup>
// 无需额外逻辑
</script>

<style scoped>
/* 使用 Tailwind CSS，无需额外样式 */
</style>
