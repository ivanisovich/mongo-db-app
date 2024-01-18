import axios from 'axios';
import { useUserStore } from '../store/app';

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

  async login(data) {
    try {
      const response = await axios.post("http://localhost:3001/login", data, {
        withCredentials: true
      });
      userStore.setUser(response.data.email)
      console.log(response.data)
      return response.data;
    } catch (error) {
       throw error;
    }
  }
}

export default new UserService();
