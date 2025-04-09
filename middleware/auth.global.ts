import Cookies from "js-cookie";
export default defineNuxtRouteMiddleware(async (to, from) => {
  const supabase = useSupabaseClient();
  if (!Cookies.get("user")) {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      // 额外验证 session 是否有效
      if (session) {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();
        Cookies.set("user", JSON.stringify(user));
        if (error || !user) {
          // session 无效，清除它
          await supabase.auth.signOut();
          return navigateTo("/login");
        }
      }

      const publicRoutes = ["/login", "/register", "/"];

      if (
        !session &&
        (!publicRoutes.includes(to.path) || to.path.includes("admin"))
      ) {
        return navigateTo("/login");
      }

      if (session && to.path === "/login") {
        return navigateTo("/");
      }
    } catch (error) {
      console.error("Error in auth middleware:", error);
      return navigateTo("/error");
    }
  }
});
