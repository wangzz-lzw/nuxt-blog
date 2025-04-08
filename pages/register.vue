<template>
  <div class="register">
    <h1>注册</h1>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="email">邮箱</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div>
        <label for="password">密码</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button type="submit">注册</button>
    </form>
    <p v-if="error">{{ error }}</p>
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

<style scoped>
/* 样式代码 */
</style>
