import Cookies from "js-cookie";
import { MainModel } from "./models";

interface IUseCases {
  handleLogout: () => void;
  getUserInfo: () => void;
}
interface IModels {
  mainModel: {
    user: any;
  };
}
export const usePresenter = () => {
  const models: Partial<IModels> = {};
  models.mainModel = MainModel();
  const useCases: Partial<IUseCases> = {};
  useCases.handleLogout = () => {
    // TODO: Implement logout functionality
  };

  useCases.getUserInfo = () => {
    const user = Cookies.get("user");
    if (user) {
      models.mainModel!.user = JSON.parse(user);
    }
  };
  onMounted(() => {
    useCases.getUserInfo!();
  });
  return {
    ...useCases,
    ...models,
  };
};
