import Axios from "@/request";

class AdminService {
  async addItem(data) {
    return await Axios.request({
      url: "menu/add",
      data: data,
      method: "post",
    });
  }

  async scanQr(data) {
    return await Axios.request({
      url: "scanQr",
      data: data,
      method: "post",
    });
  }
}

export default new AdminService();
