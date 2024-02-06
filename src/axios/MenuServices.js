import Axios from "@/request";

class MenuService {
  async getItems() {
    return await Axios.request({
      url: "menu/get",
      method: "get"
    });
  }
}

export default new MenuService();
