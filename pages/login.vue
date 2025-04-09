<template>
  <div
    class="login max-w-md mx-auto mt-12 p-6 border border-gray-300 rounded-lg shadow-md bg-white"
  >
    <h1 class="text-center text-2xl font-bold text-gray-800 mb-6">登录</h1>
    <form @submit.prevent="handleLogin">
      <div class="mb-4">
        <label for="email" class="block mb-2 font-medium text-gray-700"
          >邮箱</label
        >
        <Input
          v-model="email"
          type="email"
          id="email"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block mb-2 font-medium text-gray-700"
          >密码</label
        >
        <Input
          v-model="password"
          type="password"
          id="password"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <Button
        type="submit"
        class="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        登录
      </Button>
    </form>
    <div class="mt-6 text-center">
      <Button
        @click="handleGitHubLogin"
        class="w-full py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800"
      >
        使用 GitHub 登录
      </Button>
    </div>
    <p v-if="error" class="text-center text-red-500 mt-4">{{ error }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const error = ref<string | null>(null);

const supabase = useSupabaseClient();
const router = useRouter();

const handleLogin = async () => {
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (signInError) {
    error.value = signInError.message;
  } else {
    router.push("/");
  }
};

const handleGitHubLogin = async () => {
  const { error: githubError } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });

  if (githubError) {
    error.value = githubError.message;
  }
};
</script>

<style scoped>
/* 移除原有样式，改用 Tailwind CSS */
</style>
