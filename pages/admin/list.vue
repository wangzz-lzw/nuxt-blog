<template>
  <div>
    <h1 class="text-center text-2xl font-bold text-gray-800 mb-6">文章列表</h1>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>标题</TableHead>
          <TableHead>创建时间</TableHead>
          <TableHead>精选</TableHead>
          <TableHead>操作</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="article in articles" :key="article.id">
          <TableCell>{{ article.title }}</TableCell>
          <TableCell>{{
            new Date(article.created_at).toLocaleString()
          }}</TableCell>
          <TableCell class="text-center">
            <Checkbox
              :checked="article.star === '1'"
              @change="toggleStar(article.id, !article.star)"
              class="cursor-pointer"
            />
          </TableCell>
          <TableCell>
            <Button
              variant="link"
              @click="editArticle(article.id)"
              class="text-blue-500"
            >
              编辑
            </Button>
            <Button
              variant="link"
              @click="deleteArticle(article.id)"
              class="text-red-500 ml-4"
            >
              删除
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <p v-if="error" class="text-center text-red-500 mt-4">{{ error }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import type { Article } from "~/types/article";

const articles = ref<Article[]>([]);
const error = ref<string | null>(null);
const supabase = useSupabaseClient();
const router = useRouter();

const fetchArticles = async () => {
  try {
    const { data, error: fetchError } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });

    if (fetchError) {
      error.value = fetchError.message;
    } else {
      articles.value = data;
    }
  } catch (err) {
    error.value = "加载文章列表时出错，请稍后再试。";
    console.error(err);
  }
};

const editArticle = (id: number) => {
  router.push(`/admin/edit-article/${id}`);
};

const deleteArticle = async (id: number) => {
  if (confirm("确定要删除这篇文章吗？")) {
    try {
      const { error: deleteError } = await supabase
        .from("articles")
        .delete()
        .eq("id", id);

      if (deleteError) {
        error.value = deleteError.message;
      } else {
        articles.value = articles.value.filter((article) => article.id !== id);
        alert("文章删除成功！");
      }
    } catch (err) {
      error.value = "删除文章时出错，请稍后再试。";
      console.error(err);
    }
  }
};

const toggleStar = async (id: number, star: string) => {
  try {
    const { error: updateError } = await supabase
      .from("articles")
      .update({ star })
      .eq("id", id);

    if (updateError) {
      error.value = updateError.message;
    } else {
      const article = articles.value.find((article) => article.id === id);
      if (article) {
        article.star = star;
      }
    }
  } catch (err) {
    error.value = "更新精选状态时出错，请稍后再试。";
    console.error(err);
  }
};

onMounted(fetchArticles);
</script>

<style scoped>
/* 使用 Tailwind CSS，无需额外样式 */
</style>
