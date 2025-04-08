<template>
  <div class="h-full bg-background text-foreground">
    <header class="bg-card shadow">
      <div class="container mx-auto px-4 py-6 flex items-center space-x-4">
        <img
          src="../assets/images/avatar.png"
          alt="头像"
          class="w-16 h-16 rounded-full shadow-md"
        />
        <div>
          <h1 class="text-3xl font-bold text-primary">欢迎来到我的博客</h1>
          <p class="text-sm text-muted">作者: Wangzz</p>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8">
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-secondary">精选文章</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="post in presenter.mainModel!.articles.value"
            :key="post.id"
            class="bg-card rounded-lg shadow-md overflow-hidden"
          >
            <img
              src="../assets/images/default.png"
              alt="文章图片"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold mb-2 text-primary flex-1">
                {{ post.title }}
              </h3>
              <p class="text-sm text-muted flex-1 h-12 overflow-hidden">
                {{ post.description || "" }}
              </p>
              <Button
                variant="default"
                class="w-20 h-10"
                @click="handleReadmore(post.id)"
              >
                阅读更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4 text-secondary">关于我</h2>
        <div class="bg-card p-6 rounded-lg shadow-md">
          <p class="text-foreground">
            你好，我是
            Wangzz！欢迎来到我的个人博客，在这里我分享我对编程、技术和生活的想法、经验和知识。
          </p>
        </div>
      </section>
    </main>

    <footer class="bg-foreground text-background py-4">
      <div class="container mx-auto text-center">
        <p>&copy; 2025 Wangzz. 版权所有。</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import { usePresenter } from "./presenter";

const presenter = usePresenter();
const router = useRouter();
const handleReadmore = (id: number) => {
  router.push({
    path: `/detail/${id}`,
  });
};
</script>

<style scoped lang="scss"></style>
