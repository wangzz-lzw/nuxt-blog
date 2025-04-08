<template>
  <div class="h-full bg-background text-foreground">
    <header class="bg-card shadow">
      <div class="container px-10 py-6 flex items-center">
        <button
          @click="$router.back()"
          class="text-primary hover:underline mr-auto"
        >
          返回
        </button>
        <h1 class="text-3xl font-bold text-center text-primary flex-1">
          {{ article.title }}
        </h1>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8">
      <article
        class="prose prose-lg max-w-none bg-card p-6 rounded-lg shadow-md"
      >
        <p class="text-muted">{{ article.description }}</p>
        <PreviewMarkdown :content="article.content" class="mt-6 h-full" />
      </article>
    </main>

    <footer class="bg-foreground text-background py-4">
      <div class="container mx-auto text-center">
        <p>&copy; 2025 Wangzz. 版权所有。</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import PreviewMarkdown from "@/components/markdown/preview/index.vue";
const route = useRoute();
const article = ref({
  title: "",
  description: "",
  content: "",
});

onMounted(async () => {
  const supabase = useSupabaseClient();
  const id = route.params.id;
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching article:", error);
  } else {
    article.value = data;
  }
});
</script>

<style scoped lang="scss"></style>
