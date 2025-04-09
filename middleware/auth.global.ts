export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
    const supabase = useSupabaseClient();
    const {
      data: { session },
    } = await supabase.auth.getSession();
    console.log(session, "session");
    // if (!user) {
    //   return navigateTo("/login");
    // }
  } catch (error) {
    console.error("Error in auth middleware:", error);
    return navigateTo("/error"); // Optional: Redirect to an error page
  }
});
