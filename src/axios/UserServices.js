import Axios from "@/request";

class UserService {
  async register(data) {
    return await Axios.request({
      url: "register",
      data: data,
      method: "post"
    });
  }

  async login(data) {
    return await Axios.request({
      url: "login",
      data: data,
      method: "post",
      credentials: true
    });
  }

  async checkAuthentication(data) {
    return await Axios.request({
      url: "validateToken",
      method: "get",
      credentials: true,
    });
  }
}

export default new UserService();
