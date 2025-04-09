import { MainModel } from "../models";

interface IMainModel {
  mainModel?: ReturnType<typeof MainModel>;
}

interface IuseCases {
  getArticles?: () => Promise<void>;
}

export const usePresenter = () => {
  const supabase = useSupabaseClient();
  const models: IMainModel = {};
  const useCases: IuseCases = {};

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
