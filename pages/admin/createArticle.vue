<template>
  <div
    class="create-article max-w-2xl mx-auto mt-12 p-6 border border-gray-300 rounded-lg shadow-md bg-white"
  >
    <h1 class="text-center text-2xl font-bold text-gray-800 mb-6">新增文章</h1>
    <form @submit.prevent="handleCreateArticle">
      <div class="mb-4">
        <label for="title" class="block mb-2 font-medium text-gray-700"
          >标题</label
        >
        <Input v-model="title" type="text" id="title" />
      </div>
      <div class="mb-4">
        <label for="content" class="block mb-2 font-medium text-gray-700"
          >内容</label
        >
        <MarkdownEditor
          v-model="content"
          height="400px"
          class="border border-gray-300 rounded-md"
        />
      </div>
      <Button :loading="submitloading"> 发布文章 </Button>
    </form>
    <p v-if="error" class="text-center text-red-500 mt-4">{{ error }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useSupabaseClient } from "#imports";
import MarkdownEditor from "@/components/markdown/index.vue";
import { toast } from "vue-sonner";
definePageMeta({
  layout: "admin",
});
const title = ref("");
const content = ref("");
const error = ref<string | null>(null);
const router = useRouter();

interface Article {
  title: string;
  content: string;
}

const supabase = useSupabaseClient<{ articles: Article }>();
const submitloading = ref(false);
interface Article {
  title: string;
  content: string;
}

const handleCreateArticle = async () => {
  submitloading.value = true;
  try {
    const { error: insertError } = await supabase
      .from("articles")
      .insert<Article>({ title: title.value, content: content.value });

    if (insertError) {
      error.value = insertError.message;
    } else {
      toast("文章发布成功", {
        duration: 2000,
      });
      title.value = "";
      content.value = "";
      router.push("/");
    }
  } catch (err) {
    error.value = "发布文章时出错，请稍后再试。";
    console.error(err);
  }
  submitloading.value = false;
};
</script>

<style scoped>
/* 使用 Tailwind CSS，无需额外样式 */
</style>
