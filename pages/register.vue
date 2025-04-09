<template>
  <div class="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-center text-2xl font-semibold text-gray-800 mb-6">注册</h1>
    <form @submit.prevent="handleRegister" class="space-y-4">
      <div>
        <Label for="email">邮箱</Label>
        <Input
          v-model="email"
          type="email"
          id="email"
          placeholder="请输入邮箱"
          required
        />
      </div>
      <div>
        <Label for="password">密码</Label>
        <Input
          v-model="password"
          type="password"
          id="password"
          placeholder="请输入密码"
          required
        />
      </div>
      <Button type="submit" class="w-full">注册</Button>
    </form>
    <p v-if="error" class="mt-4 text-center text-red-500">{{ error }}</p>
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

const handleRegister = async () => {
  const { error: signUpError } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });

  if (signUpError) {
    error.value = signUpError.message;
  } else {
    router.push("/login");
  }
};
</script>

<style scoped></style>
