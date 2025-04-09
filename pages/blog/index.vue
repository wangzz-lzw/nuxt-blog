<template>
  <div>
    <section class="mb-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="post in presenter.mainModel!.articles.value"
          :key="post.id"
          class="bg-card rounded-lg shadow-md overflow-hidden"
        >
          <img
            src="../../assets/images/default.png"
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
  </div>
</template>

<script setup lang="ts">
import { usePresenter } from "./presenter";
const router = useRouter();
const presenter = usePresenter();

const handleReadmore = (id: number) => {
  router.push({
    path: `/detail/${id}`,
  });
};
</script>

<style scoped lang="scss"></style>
