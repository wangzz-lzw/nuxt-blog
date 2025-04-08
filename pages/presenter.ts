import { MainModel } from "./models";

interface Models {
  mainModel?: ReturnType<typeof MainModel>;
}
interface UseCases {
  getArticles?: () => Promise<void>;
}
export const usePresenter = () => {
  const supabase = useSupabaseClient();
  const models: Models = {};
  const useCases: UseCases = {};
  models.mainModel = MainModel();

  useCases.getArticles = async () => {
    const { data } = await supabase.from("articles").select("*");
    models.mainModel!.articles.value = data!;
  };

  onMounted(() => {
    useCases.getArticles!();
  });

  return {
    ...models,
    ...useCases,
  };
};
