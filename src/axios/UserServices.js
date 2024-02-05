import axios from "axios";
import { useUserStore } from "../store/app";
import router from "@/router";
import request from "@/request";

const userStore = useUserStore();

class UserService {
  async register(data) {
    try {
      const response = await axios.post("http://localhost:3001/register", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async register(data) {
    return await request.post({
      url: "register",
      data: data,
    });
  }

  async login(data) {
    return await request.post({
      url: "login",
      data: data,
      credentials: true,
    });
  }

  async checkAuthentication() {
    try {
      const response = await axios.get("http://localhost:3001/validateToken", {
        withCredentials: true,
      });
      userStore.setUser(response.data);
      router.push({ path: "menu" });
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  }
}

export default new UserService();
